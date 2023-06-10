import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
 
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: ${({ theme }) => theme.Colors.amarelo};
  padding: 3rem 3.5rem;
  justify-items: center;

  ${media.lessThan("medium")`
   
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 1.5rem;
    gap: 2rem;
  `}

  ${media.lessThan("small")`
  
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  `}
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TypeContact = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FollowUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconsFollowUp = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconsContact = styled.div``;

export const MapSite = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rights = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.Colors.preto};
  padding: 12px 0;
  align-items: center;
  justify-content: center;
`;
