import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
`;

export const Content = styled.div`
  display: flex;
  margin-top: 100px;
  flex-wrap: wrap;

  ${media.lessThan("medium")`
    margin-top: 20px;
  `}
`;

export const SideRight = styled.div`
  width:50%;
  margin-left: 50px;

  ${media.lessThan("medium")`
    width: 100%;
    margin-left: 0px;
  `}
`;

export const HeaderPayment = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.lessThan("medium")`
      justify-content: center;
      align-items: center;
  `}
`;

export const ButtonConfirm = styled.div`
    display: flex;
    margin: 10px 30px;
    justify-content: center;
    align-items: center;
`;
