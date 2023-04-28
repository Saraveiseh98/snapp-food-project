import { Props } from "./type";
import "./styles.scss";
import Label from "../label";

export const Loader: React.FC<Props> = ({ active }) => {
  if (active)
    return (
      <div className="loader">
        <Label variant="description" className="loader__label">
          درحال دریافت...
        </Label>
      </div>
    );
  else return null;
};
