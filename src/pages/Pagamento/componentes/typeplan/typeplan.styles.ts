import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-self : flex-start;
    background-color: ${({theme})=> theme.Colors.amarelo};
    border-radius: 10px;
    padding: 20px;
    justify-content: center;
`;
