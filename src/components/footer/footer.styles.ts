import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Content = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    height: 200px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column ;
    margin-right: 50px;
    gap:15px;
    align-content: center;
    justify-content: center;
`;

export const FollowUp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top:-70px;
`;

export const IconsFollowUp = styled.div`
    display: flex;
    gap:10px;
`;

export const IconsContact = styled.div``;

export const MapSite = styled.div`
    display: flex;
    flex-direction:column;
    gap:20px;
`;

export const Rights = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.preto};
    height: 30px;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
`;