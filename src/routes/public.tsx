import { CalcPage } from "../challenge/Project_05/pages/calc";
import { Timer } from "../challenge/Project_04/pages/timer";
import { Login } from "../features/auth";
import { ProfilePage } from "../challenge/Project_06/pages/profile";
import { WeatherPage } from "../challenge/Project_07/pages/weather";
import { CalenderPage } from "../challenge/Project_08/pages/calender";
import { EnglishPage } from "../challenge/Project_09/pages/english";

export const publicRoutes = [
  { path: "/timer", element: <Timer /> },
  { path: "/calc", element: <CalcPage /> },
  { path: "/project/profile", element: <ProfilePage /> },
  { path: "/project_06/weather", element: <WeatherPage /> },
  { path: "/project_07/calender", element: <CalenderPage /> },
  { path: "/project_09/english", element: <EnglishPage /> },

  {
    path: "/auth/*",
    element: <Login />,
  },
];
