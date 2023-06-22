import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;

    ${media.lessThan("medium")`
    display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
  `}
`;

export const SectionGoals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1350px;
    flex-wrap: wrap;
    flex-direction: row;
`;


