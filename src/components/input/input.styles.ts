import styled from "styled-components";
import media from "styled-media-query";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: ${({ theme }) => theme.Colors.vinho} solid 2px;
  margin-top: 8px;

  &.error {
    border-color: ${({theme}) => theme.Colors.vermelho};
  }

  ${media.lessThan("medium")`
    padding: 7px;
  `}
`;

export const OptionsContainer = styled.div``;

export const Option = styled.div``;
