import { createElement } from "react";
import { Props, Variants } from "./type";

export const Label: React.FC<Props> = (props) => {
  return createElement(Variants[props.variant], {
    ...props,
    variant: null,
  });
};
