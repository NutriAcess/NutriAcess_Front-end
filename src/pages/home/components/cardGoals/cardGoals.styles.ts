import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const GoalsIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
`;

export const TitleIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 18px;
  margin-top: 8px;

  ${media.lessThan("small")`
      text-align:center;
  `}
`;

export const TextIcons = styled.div`
  max-width: 350px;
  text-align: center;
`;
