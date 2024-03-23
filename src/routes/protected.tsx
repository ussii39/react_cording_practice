import { Suspense } from "react";

const App = () => {
  return <></>;
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [],
  },
];
