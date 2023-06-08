import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
`;

export const BigTitle = styled.div`
  display: grid;
  font-size: 3rem;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    font-size: 2rem;
    margin-bottom: 30px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 68px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    gap: 24px;
  `}
`;

export const Contenter = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 68px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 66px;

  ${media.lessThan("medium")`
    gap: 24px;
  `}
`;

