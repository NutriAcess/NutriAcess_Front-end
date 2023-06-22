import styled from "styled-components";
import media from "styled-media-query";
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

  justify-content: center;

  ${media.lessThan("medium")`
    margin-top: -80px;
  `}
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  margin-top: 40px;
`;

export const UserDetails = styled.div`
  margin: 32px 0px 0px 32px;

  span {
    font-size: 24px;
  }

  button span {
    font-size: 14px;
  }
`;

export const Cover = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.Colors.vinho};

  display: flex;
  flex-direction: column;
`;

export const CalendarWrapper = styled.div`
  pointer-events: none;
`;

export const SchedulingCardsWrapper = styled.div`
  margin: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 8px;

  margin-top: 32px;

  ${media.lessThan("medium")`
    justify-content: space-evenly;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;

  width: 20%;

  ${media.lessThan("medium")`
    width: 50%;
  `}
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const DatePicker = styled(DateRange).attrs(({ theme }) => ({
  color: theme.Colors.vinho,
  rangeColors: [theme.Colors.vinho],
}))`
  font-family: ${({ theme }) => theme.Font.font_lato};
  font-size: 16px;

  background-color: #f8fdff;

  border-radius: 8px;

  margin-top: 8px;
`;
