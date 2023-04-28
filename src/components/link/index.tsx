import { Props } from "./type";
import { Link as RouterLink } from "react-router-dom";
import "./styles.scss";

export const Link: React.FC<Props> = ({ path, text }) => {
  return (
    <div className="link-container">
      <RouterLink className="link-container__a" to={path}>
        {text}
      </RouterLink>
    </div>
  );
};
