import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;

  ${media.lessThan("medium")`
    padding:10px;
  `}
`;

export const Title = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:50px;

  ${media.lessThan("medium")`
    margin-top: 30px;

    span {
      font-size: 18px;
    }
  `}
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 45px;
  cursor: pointer;

  ${media.lessThan("medium")`
    margin-top: 20px;
  `}
`;

export const DivNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 3px;
  background-color: ${({ theme }) => theme.Colors.vinho};

  ${media.lessThan("medium")`
    height: 30px;
    width: 28px;
  `}
`;

export const DivInput = styled.div`
  margin-top: 40px;
  width: 35%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
  width: 15%;
  margin-top: 34px;

  ${media.lessThan("medium")`
    width: 30%;
  `}
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.Colors.branco};
`;

export const Input = styled.div`
  color: ${({ theme }) => theme.Colors.branco};

  ${media.lessThan("medium")`
    font-size: 0.8rem;
  `}
`;
