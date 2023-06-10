import styled from "styled-components";

export const Container = styled.div`
`;

export const Conteiner = styled.div`
    display: flex;
`;

export const Type = styled.div`
    display: flex;
    background-color: ${({theme})=> theme.Colors.amarelo};
    border-radius: 10px;
    padding: 20px;
    justify-content: flex-end;
`;
