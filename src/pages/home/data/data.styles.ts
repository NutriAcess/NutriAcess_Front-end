import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.Colors.laranja_claro};
  padding: 60px 0px;
  justify-content: center;
  align-items: center;
`;

export const TitleDestaqueData = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardsData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 86px;
  gap: 30px;
`;
