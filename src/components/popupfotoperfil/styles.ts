import styled from "styled-components";
import media from "styled-media-query";

import { IPopUpImage } from ".";

export const Container = styled.div<IPopUpImage>`
position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s;
`

export const DivModalPhoto = styled.div`
    width: 1000px;
  background-color: ${({ theme }) => theme.Colors.branco};
  padding: 12px;
  border-radius: 24px;
  display: flex;
  gap: 20px;
  margin: 16px;
  flex-direction: column;
`

export const DivPhoto = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    img {
        border-radius: 50%;

        &:hover {
            opacity: 90%;
            cursor: pointer;
        }
    }

    ${media.lessThan("medium")`
      flex-direction: column;
      align-items: center;

      img {
        width: 40%;
      }
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.Colors.branco};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivX = styled.div`
  cursor: pointer;
`;