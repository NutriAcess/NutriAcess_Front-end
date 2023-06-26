import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  justify-content: space-between;

  align-items: center;

  > img {
    width: 180px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 24px;
`;

export const ButtonProfile = styled.div `
  display: flex;
  width: 100px;
  gap: 10px;
  img {
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    font-size: 18px;
  }
`;

