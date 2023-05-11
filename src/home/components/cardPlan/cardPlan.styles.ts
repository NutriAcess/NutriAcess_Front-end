import styled from "styled-components";

interface IHeader {
    destaque: "primario" | "secundario";
}

interface IContainer {
    shadow: "primario" | "secundario";
}

interface IButtonPlan {
    variant: "primario" | "secundario" | "terciario";
}

export const Container = styled.div<IContainer>`
    display: flex;
    margin-top: -100px;
    background-color:${({theme}) => theme.Colors.branco} ;
    flex-direction: column;
    width: 300px;
    height: 400px;
    box-shadow: ${({shadow}) => shadow === "primario" ? `0px 1px 20px 0px rgba(142, 150, 185, 0.25)` : `0px 1px 2px 0px rgba(142, 150, 185, 0.25)`} ;
    border-radius: 10px;
`;

export const Header = styled.div<IHeader>`
    display: flex;
    background-color: ${({theme, destaque}) => destaque === "primario" ? theme.Colors.laranja_destaque : "transparent"};
    color: ${({theme,destaque}) => destaque === "primario" ? theme.Colors.branco : theme.Colors.preto};
    height: 52px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const TitleHeader = styled.div`
    display: flex;
    padding: 12px 24px;
    font-weight: 600;
    align-items: center;
`;

export const Price = styled.span`
    margin: 30px;
`;

export const Description = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`;

export const Topics = styled.div`
    margin-right: 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    gap: .5rem;
    font-size : 14px;
    text-decoration: none;
    list-style-type: none;
    margin-bottom: 10px;
    line-height: 40px;
`;

export const ul = styled.div`
    display: flex;
    align-items: center;
`;

export const span = styled.div`
    margin-left: '1.2rem';
`;

export const ButtonPlan = styled.div``;


