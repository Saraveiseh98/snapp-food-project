export interface Props {
  rate: number;
  voteCount: number | string;
}

export enum RateColors {
  green = "#305d02",
  yellow = "#cdd614",
  red = "#c10914",
}

export enum RateColorsClassName {
  green = "rating__rate--green",
  yellow = "rating__rate--yellow",
  red = "rating__rate--red",
}
