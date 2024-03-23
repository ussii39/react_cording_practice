import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "../features/todoList/components/todoItem";
import { Todo } from "../features/todoList/types";

describe("TodoItem Component", () => {
  const mockChangeCompleteStatus = jest.fn();

  const todo: Todo = {
    id: 1,
    title: "Learn React Testing",
    completed: false,
    userId: 1,
    createdAt: 12,
  };

  beforeEach(() => {});

  it("should render todo title", async () => {
    render(
      <TodoItem todo={todo} changeCompleteStatus={mockChangeCompleteStatus} />
    );
    await waitFor(() => {
      expect(screen.getByText(todo.title)).toBeInTheDocument();
    });
  });

  it("should render checkbox not checked initially", () => {
    render(
      <TodoItem todo={todo} changeCompleteStatus={mockChangeCompleteStatus} />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should call changeCompleteStatus with correct arguments when checkbox is clicked", async () => {
    render(
      <TodoItem todo={todo} changeCompleteStatus={mockChangeCompleteStatus} />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    await waitFor(() => {
      expect(mockChangeCompleteStatus).toHaveBeenCalledWith(
        todo.id,
        !todo.completed
      );
    });
  });
});
