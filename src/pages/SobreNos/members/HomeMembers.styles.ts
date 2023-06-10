import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageMember = styled.div`
  img {
    border: 10px solid ${({ theme }) => theme.Colors.laranja_destaque};
    border-radius: 50%;
    cursor: pointer;
  }

  img:hover {
    transition: all 1s;
    opacity: 90%;
  }
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Stack = styled.div``;

export const SocialMedia = styled.div``;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan("medium")`
    margin-bottom: 20px;
  `}
`;


