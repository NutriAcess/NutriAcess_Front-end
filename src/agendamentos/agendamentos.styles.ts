import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.amarelo};
  height: 22rem;

  ${media.lessThan("medium")`
    margin-bottom: 20px;
  `}
`;

export const Title = styled.span`
  ${media.lessThan("medium")`
      text-align: center;
  `}
`;

export const Description = styled.p`
  
`;

export const ContentButton = styled.div`
  margin-top: 4rem;

  ${media.lessThan("medium")`
    
    margin-top: 2rem;
  `}
`;



