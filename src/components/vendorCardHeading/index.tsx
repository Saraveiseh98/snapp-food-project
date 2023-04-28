import Label from "../label";
import Rating from "../rating";
import { Props } from "./type";
import "./styles.scss";

export const VendorCardHeading: React.FC<Props> = (props) => {
  return (
    <div className="vendor-card-heading">
      <Label variant="title" className="vendor-card-heading__Label">
        {props.title}
      </Label>
      <Rating rate={props.rate} voteCount={props.voteCount} />
    </div>
  );
};
