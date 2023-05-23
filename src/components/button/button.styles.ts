import styled, { DefaultTheme } from "styled-components";

type TVariant = "primario" | "secundario" | "terciario";
interface IStyles {
  variant: TVariant;
}

function getColorVariant(variant: TVariant, theme: DefaultTheme) {
  switch (variant) {
    case "primario":
      return theme.Colors.branco;
    case "secundario":
      return theme.Colors.vinho;
    default:
      return theme.Colors.preto;
  }
}

function getBackgroundVariant(variant: TVariant, theme: DefaultTheme) {
  switch (variant) {
    case "primario":
      return theme.Colors.vinho;
    case "secundario":
      return "transparent";
    default:
      return theme.Colors.amarelo;
  }
}

export const Container = styled.button<IStyles>`
  padding: 12px 24px;
  border-radius: 15px;
  background-color: ${({ theme, variant }) =>
    getBackgroundVariant(variant, theme)};

  border: 2px solid
    ${({ theme, variant }) =>
      variant === "secundario" ? theme.Colors.vinho : "transparent"};
`;

export const TitleButton = styled.span<IStyles>`
  font-weight: bold;
  font-family: ${({ theme }) => theme.Font.font_lato};
  color: ${({ theme, variant }) => getColorVariant(variant, theme)};
`;
