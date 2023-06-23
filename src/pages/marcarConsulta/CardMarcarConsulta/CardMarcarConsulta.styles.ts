import styled from "styled-components";
import media from 'styled-media-query';

export const ContainerGLobal = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.Colors.amarelo};
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    ${media.lessThan("small")`
        
  `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 80px;

    ${media.lessThan("small")`
        gap: 32px;
        justify-content: center;
  `}
`;

export const PhotoWithCalendar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
    flex-wrap: wrap;
    ${media.lessThan("small")`
        gap: 32px;
        justify-content: center
    
  `}
`;

export const Image = styled.div`
    margin-bottom: 16px;
    img {
        width: 250px;
        border-radius: 50%;
    }
    ${media.lessThan("small")`
    img {
        width: 150px;
    }
  `}
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 18px;
    align-items: center;
`;

export const Infos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${media.lessThan("small")`
    justify-content: center;
    span{
        font-size: 22px;
        align-items: center;
    }
  `}
`;

export const ButtonConfirm = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;
export const DivPlan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const TitlePlan = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonPlans = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 48px 0;

    ${media.lessThan("small")`
    display: flex;
    width: 100%;
    span {
        display: flex;
        justify-self: center;
    }
  `}
`;

export const ContentCalender = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const CalendarWrapper = styled.div`
    pointer-events: none;
`;

/*export const DatePicker = styled(DateRange).attrs(({ theme }) => ({
    color: theme.Colors.vinho,
    rangeColors: [theme.Colors.vinho],
  }))`
    font-family: ${({ theme }) => theme.Font.font_lato};
    font-size: 16px;
  
    background-color: #f8fdff;
  
    border-radius: 24px;
  
    margin-top: 8px;
  `;*/

export const DivFruit = styled.div`
  img {
    width:300px;
  }

  ${media.lessThan("small")`
        display: none;
    `}
`;
