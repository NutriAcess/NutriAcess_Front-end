import styled from "styled-components";

interface IContainer {
    variant: "primario" | "secundario" | "terciario";
}

export const Container = styled.button<IContainer>`
    padding: 12px 24px;
    border-radius: 15px;
    background-color: ${({theme,variant}) => variant === "primario" ? theme.Colors.vinho : "transparent"};
    border: 2px solid ${({theme,variant}) => variant === "secundario" ? theme.Colors.vinho : variant === "terciario" ? theme.Colors.laranja_destaque : "transparent"};
`;

export const TitleButton = styled.span<IContainer>`
    font-weight: bold;
    font-family: ${({theme}) => theme.Font.font_lato};
    color: ${({theme,variant}) => variant === "primario" ? theme.Colors.branco : variant === "secundario" ? theme.Colors.vinho : theme.Colors.laranja_destaque };
`;
