import styled from "styled-components";
import media from "styled-media-query";
import BackgroundImage from "../../assets/background_.jpg";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 720px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan("medium")`
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
  `}

`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 50px;
  margin-bottom: 32px;

  ${media.lessThan("medium")`
    span {
      font-size: 32px;
      line-height: 50px;
      margin-left: -20px;
    }
  `}
`;

export const DivButton = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  margin-left: 50px;
  font-family: ${({ theme }) => theme.Font.font_lato};

  
  ${media.lessThan("medium")`
      margin-left: 30px;
    `}
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  background-color: ${({ theme }) => theme.Colors.cinza};
`;

export const LogoPartners = styled.div`
  

  ${media.lessThan("small")`
    margin: 0; 
  `}
`;

export const LogoPartners1 = styled.div`
    img {
      width: 100px;
    }
`
