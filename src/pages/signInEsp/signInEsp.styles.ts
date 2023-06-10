import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Form = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  ${media.lessThan("medium")`
    width: 90%;
    padding: 0 16px;
  `}
`;

export const InputWrapper = styled.div`
  width: 600px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const ButtonWrapper = styled.div`
  width: 200px;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

