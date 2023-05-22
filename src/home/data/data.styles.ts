import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.Colors.laranja_claro};
    height: 550px;
`;

export const TitleDestaqueData = styled.div`
    display: flex;
    margin: 40px;
    justify-content: center;

`;

export const CardsData = styled.div`
    display: flex;
    margin-top: 70px;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    &:hover {
        color: ${({theme}) => theme.Colors.preto};
    }
`;

