import styled from "styled-components";
import { DateRange } from "react-date-range";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 60px;

  margin-right: 26px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Info = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  margin-top: 62px;
`;

export const Scheduling = styled.div`
  display: flex;

  margin-top: -160px;

  padding: 24px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`;

export const UserDetails = styled.div`
  margin: 32px 0px 0px 32px;
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

  margin-top: 8px;
`;
