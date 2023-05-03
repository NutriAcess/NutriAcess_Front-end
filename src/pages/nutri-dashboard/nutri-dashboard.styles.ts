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

  background-color: white;

  margin-right: 26px;
`;

export const TextWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Info = styled.div``;

export const UserWrapper = styled.div`
  display: flex;

  margin-top: 62px;

  background-color: red;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -150px;
`;

export const Cover = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.Colors.vinho};

  display: flex;
  flex-direction: column;
`;

export const DatePicker = styled(DateRange).attrs(({ theme }) => ({
  color: theme.Colors.vinho,
  rangeColors: [theme.Colors.vinho],
}))`
  font-family: ${({ theme }) => theme.Font.font_lato};
  font-size: 16px;

  background-color: #f8fdff;

  border-radius: 24px;
`;
