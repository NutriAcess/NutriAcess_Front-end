import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
    display: flex;
    height: 300px;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.Colors.amarelo};
    padding-top: 30px;
    margin-bottom: 62px;
    gap: 16px;

    ${media.lessThan("small")`
        margin-bottom: -20px;
    `}
`;

export const Title = styled.span`
    margin: 50px 0;
`;

export const SubTitle = styled.span`
    ${media.lessThan("small")`
        text-align: center;
    `}
`;