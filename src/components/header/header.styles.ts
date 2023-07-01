import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.header`
  display: flex;

  justify-content: space-between;

  align-items: center;
  cursor: pointer;

  > img {
    width: 180px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 24px;
`;

export const ButtonProfile = styled.div`
  display: flex;
  width: 100px;
  gap: 10px;
  img {
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    font-size: 18px;
  }
`;

export const Link = styled.div`
    color: ${({ theme }) => theme.Colors.vinho};
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding: 0 10px;

    &:after {
        content: " ";
        position: absolute;
        background-color: ${({ theme }) => theme.Colors.laranja_destaque};
        height: 4px;
        border-radius: 10px;
        width: 0;
        left: 20%;
        bottom: -2px;
        transition: 0.6s;
    }

    &:hover::after{
        width: 60%;
        transform: none;
    }

    ${media.lessThan("medium")`
      &:hover::after {
        width: 0; /* Remove o efeito de hover */
      }
  `}
`;