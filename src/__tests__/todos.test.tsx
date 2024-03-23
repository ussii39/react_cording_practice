import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as todoListApi from "../features/todoList/api/getTodoList";
import { Todos } from "../features/todoList";
import { Todo } from "../features/todoList/types"; // Todo 型をインポート

// jest.mock の呼び出しは変更なし
jest.mock("../features/todoList/api/getTodoList", () => ({
  getTodolist: jest.fn(),
}));

describe("Todos Component", () => {
  beforeEach(() => {
    // ここで型アサーションを使用
    (todoListApi.getTodolist as jest.Mock<Promise<Todo[]>>).mockResolvedValue(
      []
    );
  });

  //   it("displays loading text before todo list is fetched", async () => {
  //     render(<Todos />);
  //     // expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  //   });

  it("displays todo items after fetching", async () => {
    // モック関数が解決するダミーのToDoリスト
    const mockTodoList = [
      {
        id: 1,
        title: "Learn React",
        completed: false,
        userId: 1,
        createdAt: 12,
      },
      {
        id: 2,
        title: "Build a project",
        completed: false,
        userId: 1,
        createdAt: 12,
      },
    ];

    await waitFor(() => {
      // ここでも型アサーションを使用
      (todoListApi.getTodolist as jest.Mock<Promise<Todo[]>>).mockResolvedValue(
        mockTodoList
      );
    });

    render(<Todos />);

    // 各ToDoアイテムがレンダリングされるまで待機
    mockTodoList.map(async (todo) => {
      await waitFor(async () => {
        expect(await screen.findByText(todo.title)).toBeInTheDocument();
      });
    });
  });
});
