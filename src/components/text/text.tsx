import { CustomSpan } from "./text.styles";
import { IText } from "./text.types";

export const Text = ({
  size,
  weight,
  height,
  color,
  children,
  transitionTiming,
}: IText) => {
  return (
    <CustomSpan
      transitionTiming={transitionTiming}
      weight={weight}
      height={height}
      color={color}
      size={size}
    >
      {children}
    </CustomSpan>
  );
};
