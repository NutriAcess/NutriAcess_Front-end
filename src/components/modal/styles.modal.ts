import styled, { css, keyframes } from "styled-components";
import { IContainer, IHeader } from "./modal.types";
import media from "styled-media-query";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s;

  

  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideIn} .3s forwards;
        `
      : css`
          ${slideOut} .3s forwards;
        `};
`;

export const PressArea = styled.div`
  width: 50%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.Colors.branco};

  padding: 32px;

  overflow-y: scroll;
`;

export const Header = styled.div<IHeader>`
  display: flex;
  align-items: center;

  ${({ title }) =>
    title
      ? css`
          justify-content: space-between;
        `
      : css`
          justify-content: flex-end;
        `}

  margin-bottom: 20px;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
