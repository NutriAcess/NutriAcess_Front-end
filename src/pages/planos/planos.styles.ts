import styled from "styled-components";

export const Container = styled.div``;

export const HeaderPlans = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    height: 420px ;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap:60px;
`;

export const Imagem = styled.div`
    margin-top: -100px;
`;

export const SectionMeet = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const SectionText = styled.div`
    display: flex;

    flex-direction: column;
    gap:24px;
    width: 425px;

    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const SectionPlans = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 200px;
`;