import { FC } from "react";
import { Props } from "./type";
import "./styles.scss";

const Avatar: FC<Props> = (props) => {
  const imageProps = { ...props };
  return (
    <div className="avatar">
      <img className="avatar__image" width="56" height="56" {...imageProps} />
    </div>
  );
};

export default Avatar;
