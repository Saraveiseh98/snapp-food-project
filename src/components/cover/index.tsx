import { Props } from "./type";
import "./styles.scss";

const Cover: React.FC<Props> = (props) => {
  return (
    <div>
      <img className="cover" {...props} />
    </div>
  );
};

export default Cover;
