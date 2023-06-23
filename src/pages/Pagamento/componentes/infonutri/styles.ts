import styled from 'styled-components';
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    
    gap:20px;

    ${media.lessThan("medium")`
      margin-top: 36px;

      align-items: center;
      flex-direction: column;
  `}
`;

export const Imagem = styled.div`
  width: 150px;

  img {
    width: 100%;
  }
`;

export const InformationNutri = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
`;

