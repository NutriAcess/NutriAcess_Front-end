import styled from "styled-components"
import BackgroundImage from "../assets/background.svg"

export const Container = styled.div`
    display: flex;
    
    width: 100vw;

    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`

export const DivText = styled.div`
    display: flex;
    text-align: start;
    align-items: center;
`;

export const DivButton = styled.div`
    position: absolute;
    left: 5%;
    right: 0;
    top: 85%;
    text-align: start;
    align-items: center;
    font-family: ${({theme}) => theme.Font.font_lato};
`;

export const Button = styled.div`
    padding: 12px 24px;
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