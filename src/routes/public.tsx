import { CalcPage } from "../challenge/Project_05/pages/calc";
import { Timer } from "../challenge/Project_04/pages/timer";
import { Login } from "../features/auth";

export const publicRoutes = [
  { path: "/timer", element: <Timer /> },
  { path: "/calc", element: <CalcPage /> },

  {
    path: "/auth/*",
    element: <Login />,
  },
];
