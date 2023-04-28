import { ReactNode } from "react";
import { IVendor } from "../../models/vendor";

export interface Props {
  children?: ReactNode;
  data: IVendor;
  className?: string;
}
