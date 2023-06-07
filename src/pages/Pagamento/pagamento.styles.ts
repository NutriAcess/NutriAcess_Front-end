import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Content = styled.div`
  display: flex;
  margin-top: 100px;
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 10px;
  padding-left: 50px;
  border-right: 1px solid ${({theme}) => theme.Colors.vinho};
`;

export const SideRight = styled.div`
  width:50%;
  margin-left: 50px;
`;

export const VerticalBar = styled.div`
  width: 2px;
  display: flex;
  margin-left: 38%;
  margin-top: -10%;
  height: 600px;
  background-color: black;
`;

export const ContentInput = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    gap: 20px;
`;

export const Inputstyle = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 20px;
`;

export const StyledCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: justify;
 `;

export const SectionChekbox = styled.div`
    margin-left: 2%;
    margin-top: 25px;
`;

export const ButtonConfirm = styled.div`
    display: flex;
    width: 70%;
    justify-content: end;
    align-items: center;
`;
