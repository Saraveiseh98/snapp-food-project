import { createElement } from "react";
import { Props, Variants } from "./type";

const Label: React.FC<Props> = (props) => {
  return createElement(Variants[props.variant], {
    ...props,
    variant: null,
  });
};

export default Label;
