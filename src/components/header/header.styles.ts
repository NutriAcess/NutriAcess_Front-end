import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  justify-content: space-between;

  align-items: center;

  @media screen and (max-width: 300px){
    display: none;
  }

  > img {
    width: 180px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 24px;
`;
