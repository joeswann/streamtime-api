import { StreamtimeSearchTodosType } from "../types/search";
import { StreamtimeTodo } from "../types/todo";
import { request } from "./client";

export const createTodo = (todo: Partial<StreamtimeTodo>) =>
  request({
    method: "POST",
    url: `/v1/logged_times`,
    data: todo,
  });

export const createTodoBulk = (todos: Partial<StreamtimeTodo>[]) =>
  request({
    method: "POST",
    url: `/v1/logged_times/bulk`,
    data: { loggedTimes: todos },
  });
``;
export const getTodo = (todoId: number) =>
  request({
    method: "GET",
    url: `/v1/logged_times/${todoId}`,
  });

export const deleteTodo = (todoId: number) =>
  request({
    method: "DELETE",
    url: `/v1/logged_times/${todoId}`,
  });

export const updateTodo = (todo: Partial<StreamtimeTodo>) =>
  request({
    method: "PUT",
    url: `/v1/logged_times/${todo.id}`,
    data: todo,
  });

export const searchTodos = (search: StreamtimeSearchTodosType) =>
  request({
    method: "POST",
    url: `/v1/logged_times/search`,
    data: search,
  });

// SEARCH Todos
