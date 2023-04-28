import { FC } from "react";
import "./styles.scss";
import { Props } from "./type";
import { Cover } from "../cover";
import { Avatar } from "../avatar";
import { Label } from "../label";
import { Delivery } from "../delivery";
import { VendorCardHeading } from "../vendorCardHeading";

export const VendorCard: FC<Props> = (props) => {
  return (
    <article className={`card ${props.className}`}>
      <div className="card__header">
        <Cover src={props.data.backgroundImage} />
        <Avatar src={props.data.logo} />
      </div>
      <div className="card__body">
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
    </article>
  );
};
