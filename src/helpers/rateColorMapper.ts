import { RateColors } from "../components/rating/type";

export const rateRangeMapper = (num: number): keyof typeof RateColors => {
  if (num >= 4.5) return "green";
  if (num >= 3) return "yellow";
  else return "red";
};
