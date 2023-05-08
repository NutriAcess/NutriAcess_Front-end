import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    height: 300px;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    margin: 50px 0;
`;

export const SubTitle = styled.div``;
