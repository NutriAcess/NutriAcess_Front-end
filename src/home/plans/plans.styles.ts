import styled from "styled-components";

interface IContainer {
    shadow: "primario" | "secundario";
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    height: 350px;
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

export const CardPlanGlobal = styled.div<IContainer>`
    display: flex;
    background-color:${({theme}) => theme.Colors.branco} ;
    flex-direction: column;
    width: 350px;
    height: 350px;
    box-shadow: ${({shadow}) => shadow === "primario" ? `0px 1px 20px 0px rgba(142, 150, 185, 0.25)` : `0px 1px 2px 0px rgba(142, 150, 185, 0.25)`} ;
    border-radius: 10px;
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

