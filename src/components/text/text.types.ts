import { ReactNode } from "react";
import { TColors } from "../../global/colorsMapping";

type TSize = "2" | "4" | "8" | "12" | "14" | "16" | "18" | "20" | "24" | "28" | "32" | "36" | "42" | "48" | "64";

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
