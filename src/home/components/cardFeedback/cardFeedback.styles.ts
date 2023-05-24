import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const PhotoUser = styled.div`
  display: flex;

  width: 90px;
  height: 90px;

  border-radius: 45px;

  align-items: center;
  justify-content: center;
`;

export const NameUser = styled.div`
  margin: 12px 0;
`;

export const DescriptionUser = styled.div`
  margin: 24px 0;
  width: 450px;
  text-align: center;
`;
