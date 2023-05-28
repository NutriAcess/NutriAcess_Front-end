import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;
  top: 50%;
  left: 50%;
  transform: translate(0%, 180%);
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 1%;
  right: 19%;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.vinho};
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 40%;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  border: ${({ theme }) => theme.Colors.vinho} solid 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
