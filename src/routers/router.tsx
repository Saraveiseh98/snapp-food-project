import { createBrowserRouter } from "react-router-dom";
import { HomePage, VendorsPage } from "../pages";
import { PageDataType, RoutesPath } from "./types/routeTypes";

const pagesData: PageDataType[] = [
  {
    path: RoutesPath.MAIN_ROUTE,
    element: <HomePage />,
    title: "main",
  },
  {
    path: RoutesPath.VENDORS_ROUTE,
    element: <VendorsPage />,
    title: "main",
  },
];

const router = createBrowserRouter(pagesData);

export default router;
