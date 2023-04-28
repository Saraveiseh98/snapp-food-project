export interface Props {
  deliveryFee: number;
  isZFExpress: boolean;
}

export enum DeliveryMethod {
  express = "ارسال اکسپرس",
  vendor = "پیک فروشنده",
}
