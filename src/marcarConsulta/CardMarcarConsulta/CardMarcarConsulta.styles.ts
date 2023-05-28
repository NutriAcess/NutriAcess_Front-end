import { DateRange } from 'react-date-range';
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.Colors.amarelo};
    width: 1100px;
    height: 664px;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Consulta = styled.div`
    
`;

export const Image = styled.div`

`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonConfirm = styled.div`
    width: 50%;
`;

export const ButtonPlans = styled.div`
    width: 20%;
    align-items: center;
`;

export const ContentCalender = styled.div`
    display: flex;
    flex-direction: column;
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


