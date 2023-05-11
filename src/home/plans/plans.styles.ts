import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    height: 300px;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.Colors.amarelo};
`;

export const Plan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
`;

export const Title = styled.span`
    margin: 50px 0;
`;

export const SubTitle = styled.span``;

export const CardPlanGlobal = styled.div`
    display: flex;
    flex-direction: column;
`;

