import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const TitleStap = styled.div`
    margin-top: 20px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const Photo = styled.div`
    display: flex;
    width: 230px;
    height: 230px;
    border: 2px solid ${({theme}) => theme.Colors.vinho};
    align-items: center;
    justify-content: center;

    UserFocus {
        color: ${({theme}) => theme.Colors.vinho};
    }
`;
