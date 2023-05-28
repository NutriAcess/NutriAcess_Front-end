import styled, { css } from "styled-components";
import { colorsMapping } from "../../global/colorsMapping";
import { IStylesProps } from "./text.types";

export const CustomSpan = styled.span<IStylesProps>`
  color: ${({ color }) => colorsMapping(color)};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height }) => height}px;
  font-size: ${({ size }) => size}px;
  font-family: ${({ theme }) => theme.Font.font_lato};

  ${({ transitionTiming }) =>
    transitionTiming &&
    css`
      transition: ${transitionTiming}s;
    `}
`;
