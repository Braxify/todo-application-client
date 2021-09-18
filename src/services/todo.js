import { axiosInstance } from '../api';

export default {
  createNewTodo: (payload, userId) =>
    axiosInstance.post('/todo', {
      ...payload,
      color: payload.color,
      deadline: payload.todoDate,
      author: userId,
    }),
  getAllTodos: (userId) => axiosInstance.get(`/todo/all/${userId}`),
  removeTodo: (payload) => axiosInstance.delete(`/todo/${payload.id}`),
  toggleTodoStatus: (payload) =>
    axiosInstance.put(`/todo/check/${payload.id}`, { id: payload.id }),
  updateTodo: (payload) =>
    axiosInstance.put(`/todo/${payload.todoId}`, {
      title: payload.title,
      deadline: payload.todoDate,
      color: payload.color,
    }),
};
