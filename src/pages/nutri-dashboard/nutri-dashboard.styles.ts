import styled from "styled-components";
import { DateRange } from "react-date-range";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Cover = styled.div`
  background-color: ${({ theme }) => theme.Colors.vinho};
  height: 50%;
  width: 100vw;
`;

export const DatePicker = styled(DateRange).attrs(({ theme }) => ({
  color: theme.Colors.vinho,
  rangeColors: [theme.Colors.vinho],
}))`
  font-family: ${({ theme }) => theme.Font.font_lato};
  font-size: 16px;

  z-index: -1000;

  background-color: #f8fdff;
`;
