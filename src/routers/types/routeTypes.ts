import { ReactElement } from "react";

export interface PageDataType {
  path: string;
  element: ReactElement;
  title: string;
}

export enum RoutesPath {
  MAIN_ROUTE = "/",
  VENDORS_ROUTE = "/vendors",
}
