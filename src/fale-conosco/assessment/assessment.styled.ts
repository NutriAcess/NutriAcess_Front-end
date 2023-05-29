import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
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
`;

export const DivInput = styled.div`
  margin-top: 40px;
  width: 35%;
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
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Number = styled.div`
  color: ${({ theme }) => theme.Colors.branco};
`;

export const Input = styled.div`
  color: ${({ theme }) => theme.Colors.branco};
`;
