import { FC } from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
const App: FC = () => {
  return useRoutes(routes);
};

export default App;
