import userAPI from '../../services/user';
import todoAPI from '../../services/todo';

export async function login(dispatch, payload) {
  try {
    dispatch({ type: 'REQUEST_AUTH' });
    const loginResponse = await userAPI.login(payload);
    const loginData = loginResponse.data;
    if (!loginData.accessToken || !loginData.refreshToken) {
      throw new Error(loginData.message);
    }
    const { accessToken } = loginData;
    const { firstName, lastName, username, id } = loginData.user;
    if (loginData && accessToken) {
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: {
          userInfo: { id, firstName, lastName, username, token: accessToken },
        },
      });
      localStorage.setItem(
        'userData',
        JSON.stringify({
          firstName,
          lastName,
          username,
          token: accessToken,
          id,
        })
      );
      return { firstName, lastName, username, token: accessToken, id };
    }

    dispatch({
      type: 'AUTH_ERROR',
      payload: { error: loginData.message },
    });
    return false;
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: { error: 'Ошибка авторизации!' },
    });
    return false;
  }
}

export async function register(dispatch, payload) {
  try {
    dispatch({ type: 'REQUEST_AUTH' });
    const registerResponse = await userAPI.register(payload);
    const registerData = registerResponse.data;
    if (!registerData.accessToken) {
      throw new Error(registerData.message);
    }
    const { accessToken } = registerData;
    const { firstName, lastName, username, id } = registerData.user;
    if (registerData && accessToken) {
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: {
          userInfo: { firstName, lastName, username, token: accessToken, id },
        },
      });
      localStorage.setItem(
        'userData',
        JSON.stringify({
          firstName,
          lastName,
          username,
          token: accessToken,
          id,
        })
      );
      return { firstName, lastName, username, token: accessToken, id };
    }

    dispatch({
      type: 'AUTH_ERROR',
      payload: { error: registerData.message },
    });
    return false;
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: { error: 'Ошибка регистрации!' },
    });
    return false;
  }
}

export async function logout(dispatch) {
  try {
    await userAPI.logout();
    localStorage.removeItem('userData');
    dispatch({ type: 'AUTH_LOGOUT' });
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: { error: 'Ошибка при выходе!' },
    });
  }
}

export function openEditModal(dispatch, payload) {
  dispatch({ type: 'OPEN_EDIT_MODAL', payload });
}

export function closeEditModal(dispatch) {
  dispatch({ type: 'CLOSE_EDIT_MODAL' });
}

export function openRemoveModal(dispatch, payload) {
  dispatch({ type: 'OPEN_REMOVE_MODAL', payload });
}

export function closeRemoveModal(dispatch) {
  dispatch({ type: 'CLOSE_REMOVE_MODAL' });
}

export async function createNewTodo(dispatch, payload) {
  try {
    const userId = JSON.parse(localStorage.getItem('userData'))?.id;
    dispatch({ type: 'CREATE_TODO_START' });
    const response = await todoAPI.createNewTodo(payload, userId);
    const { data } = response;
    dispatch({ type: 'CREATE_TODO_SUCCESS', payload: data.todo });
  } catch (err) {
    dispatch({
      type: 'CREATE_TODO_ERROR',
      payload: { error: 'Заполните все поля!' },
    });
  }
}

export async function getAllTodos(dispatch) {
  try {
    const userId = JSON.parse(localStorage.getItem('userData'))?.id;
    dispatch({ type: 'FETCH_TODOS_START' });
    const response = await todoAPI.getAllTodos(userId);

    const { data } = response;
    dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: { todos: data } });
  } catch {
    dispatch({
      type: 'FETCH_TODOS_ERROR',
      payload: { error: 'Ошибка при получении todo пользователя!' },
    });
  }
}

export async function removeTodo(dispatch, payload) {
  try {
    dispatch({ type: 'REMOVE_TODO_START' });
    await todoAPI.removeTodo(payload);
    dispatch({ type: 'REMOVE_TODO_SUCCESS', payload });
  } catch {
    dispatch({
      type: 'REMOVE_TODO_ERROR',
      payload: { error: 'Ошибка при удалении todo!' },
    });
  }
}

export async function toggleTodoStatus(dispatch, payload) {
  try {
    dispatch({ type: 'TOGGLE_TODO_STATUS_START' });
    await todoAPI.toggleTodoStatus(payload);
    dispatch({ type: 'TOGGLE_TODO_STATUS_SUCCESS', payload });
  } catch {
    dispatch({
      type: 'TOGGLE_TODO_STATUS_ERROR',
      payload: { error: 'Ошибка при изменении статуса todo!' },
    });
  }
}

export async function updateTodo(dispatch, payload) {
  try {
    dispatch({ type: 'EDIT_TODO_START' });
    const response = await todoAPI.updateTodo(payload);
    const { data } = response;
    dispatch({
      type: 'EDIT_TODO_SUCCESS',
      payload: { ...data.todo, _id: payload.todoId },
    });
  } catch {
    dispatch({
      type: 'TOGGLE_TODO_STATUS_ERROR',
      payload: { error: 'Ошибка при изменении todo!' },
    });
  }
}
