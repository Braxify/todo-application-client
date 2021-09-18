const storageName = 'userData';

const user = JSON.parse(localStorage.getItem(storageName)) || null;

export const initialState = {
  userInfo: null || user,
  todos: { completed: null, pending: null },
  loading: false,
  errorMessage: null,
  ui: {
    removeTodoModal: {
      isOpened: false,
      todoId: null,
      isCheck: false,
      decription: '',
    },
    editTodoModal: {
      todoId: null,
      type: '',
      isOpened: false,
      isCheck: false,
      color: '',
      title: '',
      todoTitle: '',
      todoDate: new Date(),
    },
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_AUTH':
      return {
        ...state,
        loading: true,
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        userInfo: action.payload.userInfo,
        loading: false,
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        userInfo: null,
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        errorMessage: null,
      };

    case 'OPEN_EDIT_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          editTodoModal: {
            todoId: action.payload.todoId,
            type: action.payload.type,
            isOpened: true,
            isCheck: action.payload.isCheck,
            title: action.payload.title,
            todoTitle: action.payload.todoTitle,
            todoDescription: action.payload.todoDescription,
            todoDate: action.payload.todoDate,
          },
        },
      };
    case 'CLOSE_EDIT_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          editTodoModal: {
            ...state.ui.editTodoModal,
            isOpened: false,
          },
        },
      };
    case 'OPEN_REMOVE_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          removeTodoModal: {
            isOpened: true,
            todoId: action.payload.id,
            isCheck: action.payload.isCheck,
            description: action.payload.description,
          },
        },
      };
    case 'CLOSE_REMOVE_MODAL':
      return {
        ...state,
        ui: {
          ...state.ui,
          removeTodoModal: {
            ...state.ui.removeTodoModal,
            isOpened: false,
          },
        },
      };
    case 'FETCH_TODOS_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: {
          completed: action.payload.todos.filter((todo) => todo.isCheck),
          pending: action.payload.todos.filter((todo) => !todo.isCheck),
        },
        loading: false,
      };
    case 'FETCH_TODOS_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
        loading: false,
      };
    case 'CREATE_TODO_START':
      return {
        ...state,
      };
    case 'CREATE_TODO_SUCCESS':
      return {
        ...state,
        todos: {
          ...state.todos,
          pending: [...state.todos.pending, action.payload],
        },
      };
    case 'CREATE_TODO_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case 'REMOVE_TODO_START':
      return {
        ...state,
      };
    case 'REMOVE_TODO_SUCCESS':
      let completed = [...state.todos.completed];
      let pending = [...state.todos.pending];
      if (state.ui.removeTodoModal.isCheck) {
        completed = completed.filter(
          (todo) => todo._id !== state.ui.removeTodoModal.todoId
        );
      } else {
        pending = pending.filter(
          (todo) => todo._id !== state.ui.removeTodoModal.todoId
        );
      }

      return {
        ...state,
        todos: {
          ...state.todos,
          pending,
          completed,
        },
      };

    case 'REMOVE_TODO_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case 'TOGGLE_TODO_STATUS_START':
      return {
        ...state,
      };
    case 'TOGGLE_TODO_STATUS_SUCCESS':
      if (action.payload.isCheck) {
        const completedTodos = state.todos.completed.filter(
          (todo) => todo._id !== action.payload.id
        );

        const foundCompletedTodo = state.todos.completed.find(
          (todo) => todo._id === action.payload.id
        );
        return {
          ...state,
          todos: {
            ...state.todos,
            completed: completedTodos,
            pending: [...state.todos.pending, foundCompletedTodo],
          },
        };
      }

      const pendingTodos = state.todos.pending.filter(
        (todo) => todo._id !== action.payload.id
      );
      const foundPendingTodo = state.todos.pending.find(
        (todo) => todo._id === action.payload.id
      );

      return {
        ...state,
        todos: {
          ...state.todos,
          pending: pendingTodos,
          completed: [...state.todos.completed, foundPendingTodo],
        },
      };
    case 'TOGGLE_TODO_STATUS_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case 'EDIT_TODO_START':
      return {
        ...state,
      };
    case 'EDIT_TODO_SUCCESS':
      if (action.payload.isCheck) {
        const updatedCompletedTodos = state.todos.completed.map((todo) => {
          if (todo._id === action.payload._id) {
            return action.payload;
          }
          return todo;
        });
        return {
          ...state,
          todos: {
            ...state.todos,
            completed: updatedCompletedTodos,
          },
        };
      }

      const updatedPendingTodos = state.todos.pending.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload;
        }
        return todo;
      });

      return {
        ...state,
        todos: {
          ...state.todos,
          pending: updatedPendingTodos,
        },
      };
    case 'EDIT_TODO_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case 'CHANGE_TODO_COLOR':
      return {
        ...state,
        ui: {
          ...state.ui,
          editTodoModal: {
            ...state.ui.editTodoModal,
            color: action.payload,
          },
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
