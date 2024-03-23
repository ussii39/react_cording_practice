import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
// 保護されたルートおよび公開ルートのインポート
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import { Landing } from "../features/misc";
import { Todos } from "../features/todoList";

export const AppRoutes = () => {
  // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const isLoggedIn = false;

  // ログイン状態に基づいてアクセス可能なルートを定義
  const routes = [
    ...(isLoggedIn ? protectedRoutes : publicRoutes),
    { path: "/", element: <Landing /> },
    {
      path: "/todolist",
      element: isLoggedIn ? <Todos /> : <Navigate to="/" replace />,
    },
    { path: "*", element: <Navigate to="/" replace /> }, // 未定義のパスへのアクセスをハンドル
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
