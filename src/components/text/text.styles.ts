import styled from "styled-components";
import { IStylesProps } from "./text.types";
import { colorsMapping } from "../../global/colorsMapping";

export const CustomSpan = styled.span<IStylesProps>`
  color: ${({ color }) => colorsMapping(color)};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height }) => height}px;
  font-size: ${({ size }) => size}px;
  font-family: ${({ theme }) => theme.Font.font_lato};
`;
