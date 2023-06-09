import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 11px;
  font-size: 16px;
  border-radius: 8px;
  border: ${({ theme }) => theme.Colors.vinho} solid 2px;

  margin-top: 2px;
`;

export const OptionsContainer = styled.div``;

export const Option = styled.div``;