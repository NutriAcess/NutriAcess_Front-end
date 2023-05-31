import { DateRange } from 'react-date-range';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    /*width: 1100px;
    height: 664px;*/
    align-items: center;
    justify-content: center;
    margin: 0px 250px;

    flex-direction: column;

    border-radius: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    
    margin-top: 80px;
`;

export const Image = styled.div`
    margin-bottom: 50px;
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 18px;
    align-items: center;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonConfirm = styled.div`
    width: 50%;
    margin-top: 20px;
`;

export const ButtonPlans = styled.div`
    width: 20%;
    align-items: center;
    justify-content: center;
    margin: 48px 0px;
`;

export const ContentCalender = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

export const CalendarWrapper = styled.div`
    pointer-events: none;
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


