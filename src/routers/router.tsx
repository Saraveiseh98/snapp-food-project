import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PageDataType, RoutesPath } from "./types/routeTypes";

const pagesData: PageDataType[] = [
  {
    path: RoutesPath.MAIN_ROUTE,
    element: <App />,
    title: "main",
  },
];

const router = createBrowserRouter(pagesData);

export default router;
