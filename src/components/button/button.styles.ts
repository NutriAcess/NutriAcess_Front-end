import styled, { css } from "styled-components";

interface IContainer {
  xs?: boolean;
  variant: "primario" | "secundario" | "terciario" | "quartenario" | "quinto" ;
  icon?: React.ReactNode;
}

export const Container = styled.button<IContainer>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 12px 24px;
  border-radius: 15px;
  background-color: ${({ theme, variant }) =>
    variant === "primario" ? theme.Colors.vinho
    : variant === "secundario" ? "transparent" 
    : variant === "terciario" ? "transparent" 
    : variant === "quartenario" ? theme.Colors.verde 
    : theme.Colors.vermelho };
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
      width: 100%;
    `}

  &.noClick {
    cursor: default !important;
  }

  &:hover {
    ${({ theme, variant }) =>
      variant === "primario" &&
      css`
        background-color: ${theme.Colors.branco};
        border-color: ${theme.Colors.laranja_destaque};
        transition: 1s;

        ${TitleButton} {
          /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.laranja_destaque};
        }

        > *:nth-child(2) {
          /* Seleciona o segundo filho do Container (o ícone) */
          color: ${theme.Colors.laranja_destaque};
        }
      `}

    ${({ theme, variant }) =>
      variant === "secundario" &&
      css`
      background-color: ${theme.Colors.branco};
          border-color: ${theme.Colors.laranja_destaque};
          transition: 1s;
          

          ${TitleButton} { /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.laranja_destaque};
        }
        }
      `}
      

      ${({ theme, variant }) =>
      variant === "terciario" &&
      css`
        background-color: ${theme.Colors.amarelo};
        border-color: ${theme.Colors.amarelo};
        transition: 1s;

        ${TitleButton} {
          /* Adicione essa parte para aplicar o estilo no TitleButton */
          color: ${theme.Colors.branco};
        }
      `}
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
      : variant === "terciario"
      ? theme.Colors.laranja_destaque
      : theme.Colors.branco};

  ${({ icon }) =>
    icon &&
    css`
      margin-right: 16px;
    `}
`;
