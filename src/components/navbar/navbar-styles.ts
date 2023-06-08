import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 42px;

`;

export const NavLinks = styled.a`
    color: ${({theme}) => theme.Colors.vinho};
    font-size: 20px;
    font-weight: bold;
    position: relative;
    padding: 0 10px;

    &:after {
        content: " ";
        position: absolute;
        background-color: ${({theme}) => theme.Colors.laranja_destaque};
        height: 4px;
        border-radius: 10px;
        width: 0;
        left: 50%;
        bottom: -10px;
        transition: 0.6s;
    }

    &:hover::after{
        width: 100%;
        left: 0;
        transform: none;
    }
`;


export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 800px;
`;






