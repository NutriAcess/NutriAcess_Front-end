import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const Form = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  span {
    margin-bottom: 16px;
  }

  button span {
    margin-bottom: 0px;
  }


  ${media.lessThan("medium")`
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

export const DivLogo = styled.div`
  margin-top: 100px;
  ${media.lessThan("medium")`
      margin-top: 120px;
  `}
`

export const DivCadastrar = styled.div`
    margin-bottom: 20px;
`
export const RedirectSignIn = styled.div`
  button {
    text-decoration: none;
    background-color: transparent;
    color: ${({theme}) => theme.Colors.vinho};

    &:hover {
      color: ${({theme}) => theme.Colors.laranja_destaque};
    }
  }
`;