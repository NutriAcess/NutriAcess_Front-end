import styled from "styled-components";

interface IStyles {
    variant: "primario" | "secundario";
}

export const Container = styled.button<IStyles>`
    padding: 12px 24px;
    border-radius: 15px;
    background-color: ${({theme,variant}) => variant === "primario" ? theme.Colors.vinho : "transparent"};
    border: 2px solid ${({theme,variant}) => variant === "secundario" ?  theme.Colors.vinho : theme.Colors.branco};
`;

export const TitleButton = styled.span<IStyles>`
    font-weight: bold;
    font-family: ${({theme}) => theme.Font.font_lato};
    color: ${({theme,variant}) => variant === "primario" ? theme.Colors.branco : theme.Colors.vinho };
`;
