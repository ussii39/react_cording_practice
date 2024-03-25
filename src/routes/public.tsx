import { CalcPage } from "../challenge/Project_05/pages/calc";
import { Timer } from "../challenge/Project_04/pages/timer";
import { Login } from "../features/auth";
import { ProfilePage } from "../challenge/Project_06/pages/profile";

export const publicRoutes = [
  { path: "/timer", element: <Timer /> },
  { path: "/calc", element: <CalcPage /> },
  { path: "/project/profile", element: <ProfilePage /> },

  {
    path: "/auth/*",
    element: <Login />,
  },
];
