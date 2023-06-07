import styled, { css } from "styled-components";

interface IContainer {
  xs?: boolean;
  variant: "primario" | "secundario" | "terciario";
  icon?: React.ReactNode;
}

export const Container = styled.button<IContainer>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  border-radius: 15px;
  background-color: ${({ theme, variant }) =>
    variant === "primario" ? theme.Colors.vinho : "transparent"};
  border: 2px solid
    ${({ theme, variant }) =>
      variant === "secundario"
        ? theme.Colors.vinho
        : variant === "terciario"
        ? theme.Colors.laranja_destaque
        : "transparent"};

  ${({ xs }) =>
    xs &&
    css`
      width: 90%;
      font-size: 110%;
    `}

  &:hover {
    opacity: 0.8;
    transition: 1s;
  }
`;

export const TitleButton = styled.span<IContainer>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.Font.font_lato};
  color: ${({ theme, variant }) =>
    variant === "primario"
      ? theme.Colors.branco
      : variant === "secundario"
      ? theme.Colors.vinho
      : theme.Colors.laranja_destaque};

  ${({ icon }) =>
    icon &&
    css`
      margin-right: 16px;
      
    `}
`;
