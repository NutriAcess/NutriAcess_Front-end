import styled from "styled-components";

interface IStep {
    index?: number;
    active: boolean;
}

interface IContainer {
    active: boolean;
}

export const Container = styled.div<IContainer>`
`;

export const Box = styled.div<IStep>`
    background-color: ${({active, theme}) => active ? theme.Colors.vinho : theme.Colors.cinza};
    color: ${({active, theme}) => active ? theme.Colors.branco : theme.Colors.preto };
    padding: 10px 20px ;
    border-radius: 4px;
    transform: ${({ active }) => (active ? "scale(1.2)" : "none")};
`;