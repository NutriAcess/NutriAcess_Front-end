import styled from "styled-components"
import BackgroundImage from "../assets/background.svg"

export const Container = styled.div`
    display: flex;
    
    width: 100vw;

    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 720px;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    gap:20px;
    flex-direction: column;
    justify-content: center;
`;

export const DivText = styled.div`
    display: flex;
    text-align: start;
    align-items: center;
    width: 600px;
    margin-left: 50px;
`;

export const DivButton = styled.div`
    display: flex;
    text-align: start;
    align-items: center;
    margin-left: 50px;
    font-family: ${({theme}) => theme.Font.font_lato};
`;

export const Partners = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.Colors.cinza};
`;

export const LogoPartners = styled.div`
    margin: 12px 24px;
`;