import { Props } from "./type";
import "./styles.scss";

export const Cover: React.FC<Props> = (props) => {
  return (
    <div>
      <img className="cover" {...props} />
    </div>
  );
};
