import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  padding-left: 150px;

  ${media.lessThan("medium")`
    padding-left: 50px;
    span {
      font-size: 36px;
      text-align: center;
    }
  `}
`;

export const DivGeneral = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-items: center;
  `}
`;

export const DivNumber = styled.div`
  width: 310px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

  ${media.lessThan("medium")`
    width: 80%;
    margin-bottom: 20px;
  `}
`;

export const POne = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

export const TelephoneLink = styled.a`
  margin-top: 60px;
  font-size: 14px;
  color: ${({ theme }) => theme.Colors.vinho};

  ${media.lessThan("medium")`
    margin-top: 30px;
  `}
`;

export const TelephoneLink1 = styled.a`
  margin-top: 40px;
  font-size: 14px;
  color: ${({ theme }) => theme.Colors.vinho};
`;

export const DivRedes = styled.div`
  display: inline-block;
`;

export const DivTeste = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ImgTel = styled.img`
  margin-top: 30px;
`;

export const ImgRedes = styled.img``;
