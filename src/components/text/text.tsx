import { CustomSpan } from "./text.styles";
import { IText } from "./text.types";

export const Text = ({ size, weight, height, color, children }: IText) => {
  return (
    <CustomSpan weight={weight} height={height} color={color} size={size}>
      {children}
    </CustomSpan>
  );
};
