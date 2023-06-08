import styled from "styled-components";
import BackgroundImage from "../../assets/background.svg";
import media from "styled-media-query";

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
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}

`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: 50px;
  margin-bottom: 32px;

  ${media.lessThan("medium")`
  font-size: 30px;
  `}
`;

export const DivButton = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  margin-left: 50px;
  font-family: ${({ theme }) => theme.Font.font_lato};
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.cinza};
`;

export const LogoPartners = styled.div`
  margin: 12px 24px;
`;

export const ButtonWrapper = styled.div`
  width: 200px;
`;
