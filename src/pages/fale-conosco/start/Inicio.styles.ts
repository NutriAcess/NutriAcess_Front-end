import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.Colors.amarelo};
  width: 100%;
  height: 50vh;
  padding: 30px;

  ${media.lessThan("medium")`
    height: auto;
    padding: 15px 15px 0 15px;
  `}
`;

export const DivSubImg = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 34px;
  width: 100%;
  align-items: center;

  ${media.lessThan("medium")`
    flex-direction: column;
    height: auto;
    
  `}
`;

export const Title = styled.h1`
  text-align: center;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 43px;
`;

export const SubTitle = styled.div`
  width: 673px;

  ${media.lessThan("medium")`
    width: 100%;
    margin-top: 40px;
  `}
`;

export const ImgStyled = styled.img`
  display: flex;

  ${media.lessThan("medium")`
    margin-top: 40px;
  `}
`;

export const DivImage = styled.div`
  display: flex;
  align-self: flex-end;
`;
