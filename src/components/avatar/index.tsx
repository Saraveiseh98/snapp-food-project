import { FC } from "react";
import { Props } from "./type";
import "./styles.scss";

export const Avatar: FC<Props> = (props) => {
  return (
    <div className="avatar">
      <img className="avatar__image" width="56" height="56" {...props} />
    </div>
  );
};
