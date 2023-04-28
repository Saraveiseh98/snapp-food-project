import Label from "../label";
import { Props, RateColors, RateColorsClassName } from "./type";
import { rateRangeMapper } from "../../helpers/rateColorMapper";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import "./styles.scss";

const Rating: React.FC<Props> = (props) => {
  const color = rateRangeMapper(props.rate);
  return (
    <div className="rating">
      <Label variant="description" className="rating__count">
        ({props.voteCount})
      </Label>
      <span className={`rating rating__rate ${RateColorsClassName[color]}`}>
        <Label variant="description">{props.rate}</Label>
        <StarIcon fill={`${RateColors[color]}`} width="12" height="12" />
      </span>
    </div>
  );
};

export default Rating;
