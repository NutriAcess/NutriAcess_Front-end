import styled from "styled-components";
import media from "styled-media-query";


export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.Colors.amarelo};

  height: 22rem;
`;

export const Title = styled.span`
  span {
    font-size: 36px;
    ${media.lessThan("medium")`
      font-size: 24px;
  `}
  }
`;

export const Description = styled.p``;

export const ContentButton = styled.div`
  margin-top: 4rem;
`;


export  const StyledText = styled.div`
text-align: center;

`;