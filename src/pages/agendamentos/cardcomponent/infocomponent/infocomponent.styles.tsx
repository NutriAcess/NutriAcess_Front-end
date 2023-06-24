import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 1100px;
  height: 320px;
  background-color: ${({theme}) => theme.Colors.branco};
  border: 1px solid ${({theme}) => theme.Colors.preto};
  border-radius: 20px;
  margin-top: 30px;
  gap: 20px;
  box-shadow: 5px 5px 3px ${({theme}) => theme.Colors.cinza};
  margin-bottom: 80px;

  ${media.lessThan('medium')`
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 20px;
    align-items: center;
    margin-left: 250px;
  `}

  ${media.lessThan('small')`
    width: 90%;
    align-items: center;
    margin-left: 15px;
  `}
  
  
`;

export const ImageDoctor = styled.div`
  padding-left: 180px;
  cursor: pointer;

  ${media.lessThan('medium')`
    padding-left: 0;
    margin-bottom: 20px;
  `}

  ${media.lessThan('small')`
    padding: 0;
  `}
`;

export const TextTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  gap: 5px;

  img {
    cursor: pointer;
  }
`;

export const TextSocial = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DescriptionDoctor = styled.div`
  margin-bottom: 15px;
`;

export const InfoSection = styled.div`
  margin: 30px;
`;

export const ButtonDoctor = styled.div`
  width: 40%;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  ${media.lessThan('small')`
    width: 100%;
  `}
  
 
`;

export const StyledImage = styled.img`
width: 200px;
height: 200px;
`;


export const DivEspecialidade = styled.div`
  line-height: 2;
`;


