import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.Colors.laranja_medio};
  height: 300px;
  width: 300px;
  margin: 0 20px;
  padding: 30px 30px;
  border-radius: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.Colors.branco};
    transition: 0.8s;
  }
`;

export const TitleData = styled.div`
  margin: 10px 0;
`;

export const Text = styled.div`
  &:hover {
    color: ${({ theme }) => theme.Colors.preto};
  }
`;
