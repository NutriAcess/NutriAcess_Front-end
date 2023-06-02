import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    height: 350px;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.Colors.amarelo};
`;

export const Title = styled.span`
    margin: 50px 0;
`;

export const SubTitle = styled.span``;