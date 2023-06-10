import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.lessThan("small")`
    display:none;
  `}
`;

export const Title = styled.div`
  margin-bottom: 50px;
`;

export const FeedbackContainer = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;

  padding-left: 30px;
  padding-right: 30px;
`;
