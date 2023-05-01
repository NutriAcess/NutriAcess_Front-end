import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 42px;

`;

export const NavLinks = styled.a.attrs({
    target:"_blank",
    rel: "noreferrer",
})`

    
`;

export const TextLinks = styled.span`
    color: ${({theme}) => theme.Colors.vinho};
    font-size: 18px;
    font-weight: bold;
`;

export const LinkContainer = styled.div`
    padding: 16px;

    &:hover {
        border-bottom: 8px solid red;
    };
`;




