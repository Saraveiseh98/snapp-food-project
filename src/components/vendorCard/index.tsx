import { FC } from "react";
import "./styles.scss";
import { Props } from "./type";
import Cover from "../cover";
import Avatar from "../avatar";
import Label from "../label";
import { Delivery } from "../delivery";
import { VendorCardHeading } from "../vendorCardHeading";

const Card: FC<Props> = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="header">
        <Cover src={props.data.backgroundImage} />
        <Avatar src={props.data.logo} />
      </div>
      <div className="body">
        <VendorCardHeading
          rate={props.data.rate}
          voteCount={props.data.voteCount}
          title={props.data.title}
        />
        <Label variant="description" className="card-body-description">
          {props.data.description}
        </Label>
        <Delivery
          isZFExpress={props.data.isZFExpress}
          deliveryFee={props.data.deliveryFee}
        />
      </div>
    </div>
  );
};

export default Card;
