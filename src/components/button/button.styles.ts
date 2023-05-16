import styled from "styled-components";

interface IContainer {
    variant: "primario" | "secundario" | "terciario";
    width: number;
    padding: number;
    border: number;
}

interface ITitle{
    variant: "primario" | "secundario" | "terciario";
    size: number;
}

export const Container = styled.button<IContainer>`
    padding: ${({padding}) => padding}px;
    border-radius: ${({border}) => border}px;
    width: ${({width}) => width}px;
    background-color: ${({theme,variant}) => variant === "primario" ? theme.Colors.vinho : "transparent"};
    border: 2px solid ${({theme,variant}) => variant === "secundario" ? theme.Colors.vinho : variant === "terciario" ? theme.Colors.laranja_destaque : "transparent"};

`;

export const TitleButton = styled.span<ITitle>`
    font-size: ${({size}) => size}px;
    font-weight: bold;
    font-family: ${({theme}) => theme.Font.font_lato};
    color: ${({theme,variant}) => variant === "primario" ? theme.Colors.branco : variant === "secundario" ? theme.Colors.vinho : theme.Colors.laranja_destaque };
`;
