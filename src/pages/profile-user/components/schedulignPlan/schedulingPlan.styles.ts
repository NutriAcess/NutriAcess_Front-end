import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 32px;
  

  border: 1px solid ${({ theme }) => theme.Colors.laranja_destaque};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  background-color: ${({ theme }) => theme.Colors.branco};
`;
