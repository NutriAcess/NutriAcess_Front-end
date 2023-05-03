import { ReactNode } from "react";
import { TColors } from "../../global/colorsMapping";

type TSize = "2" | "4" | "8" | "16" | "24" | "32" | "36" | "64";

export interface IText {
  size: TSize;
  weight: number;
  height: number;
  color: TColors;
  children: ReactNode;
}

export interface IStylesProps {
  size: TSize;
  weight: number;
  height: number;
  color: TColors;
}
