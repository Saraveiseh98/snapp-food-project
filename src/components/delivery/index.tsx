import Label from "../label";
import { DeliveryMethod, Props } from "./type";
import "./styles.scss";

export const Delivery: React.FC<Props> = (props) => {
  return (
    <div className="delivery">
      <Label
        variant="description"
        className="delivery__Label delivery__Label--gray"
      >
        {props.isZFExpress ? DeliveryMethod.express : DeliveryMethod.vendor}
      </Label>
      <Label variant="description" className="delivery__Label">
        {props.deliveryFee.toLocaleString()} تومان
      </Label>
    </div>
  );
};
