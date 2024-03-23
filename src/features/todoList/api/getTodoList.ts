import { Todo } from "../types";

export const getTodolist = async (): Promise<Todo[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos: Todo[] = await response.json();
    return todos;
  } catch (e) {
    throw new Error("Failed to fetch todos");
  }
};
