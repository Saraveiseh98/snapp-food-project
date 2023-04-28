export interface Props {
  children: React.ReactNode;
  variant: keyof typeof Variants;
  className?: string;
}

export enum Variants {
  title = "h4",
  subtitle = "h5",
  description = "p",
}
