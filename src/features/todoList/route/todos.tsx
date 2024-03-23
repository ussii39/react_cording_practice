// route/TodoList.tsx
import { FC, useEffect, useState } from "react";
import { Todo } from "../types";
import { getTodolist } from "../api/getTodoList";
import TodoItem from "../components/todoItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/store";
import { logout, login } from "../../users/usersSlice";

interface TodoListProps {}

export const Todos: FC<TodoListProps> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  const dispatch = useDispatch<AppDispatch>();

  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    const todoData = await getTodolist();
    if (todoData) {
      setTodoList(todoData);
    }
  };

  const changeCompleteStatus = (id: number, completed: boolean) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  if (!todoList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login({ name: "John Doe" }))}>
            Login
          </button>
        )}
      </div>
      <h1>Todo List</h1>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeCompleteStatus={changeCompleteStatus}
        />
      ))}
    </div>
  );
};
