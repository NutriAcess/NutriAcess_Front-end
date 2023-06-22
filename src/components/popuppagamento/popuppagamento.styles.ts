import styled from "styled-components";
import { IPopUpPagamento } from "./popuppagamento";

export const Container = styled.div<IPopUpPagamento>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const DivModalSignUp = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.Colors.laranja_escuro};
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Question = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.Colors.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
    img {
        width: 100%;
    }
`;

export const DivX = styled.div`
  cursor: pointer;
`;

export const InsideDivUser = styled.div`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.Colors.vinho};
  transition: 0.75s;
  cursor: pointer;

  &:hover{
    opacity: 85%;
  }
`;

export const DivImageUser = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;

export const DivsText = styled.div`
  display: flex;
  flex-direction: column;
`;


export const InsideDivSpecialist = styled.div`
  border-radius: 30px;
  background-color: ${({ theme }) => theme.Colors.vinho};
  cursor: pointer;
  transition: 0.75s;
  &:hover{
    opacity: 85%;
  }
`;

export const DivImageSpecialist = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px;
  `;

export const Logo = styled.div`
    width: 300px;
    img {
        width: 100%;
    }
`;

export const Pagamento = styled.div`
    display: flex;
    justify-content: center;
    
    img {
        width: 70px;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    gap: 20px;
    text-align:center;
`;
