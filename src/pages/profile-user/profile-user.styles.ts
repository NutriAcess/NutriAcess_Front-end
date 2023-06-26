import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
`;

export const PhotoUser = styled.div`
`;

export const IconPhoto = styled.button`
  background-color: transparent;
`

export const ButtonPhoto = styled.div`
margin-top: 70px;
margin-left: -50px;
`

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

export const Info = styled.div`
  margin-left: 20px;
`;

export const UserWrapper = styled.div`
  display: flex;
  margin-top: 62px;
`;

export const Scheduling = styled.div`
  display: flex;

  margin-top: -160px;

  padding: 12px;

  justify-content: center;

  ${media.lessThan("medium")`
    margin-top: -70px;
  `}
`;

export const UserDetails = styled.div`
  margin: 32px 0px 0px 32px;
`;

export const Cover = styled.div`
  height: 50vh;
  background-color: ${({ theme }) => theme.Colors.vinho};

  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
`;

export const SchedulingCardsWrapper = styled.div`
  margin: 32px;
  gap: 16px;
  display: flex;
  flex-direction: column;

`;

export const SchedulingCardsPlan = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 26px 0px;
    flex-wrap: wrap;

`;

export const TitlePlan= styled.div`
    display: flex;

    align-items: center;

    flex-direction: column;

`;

export const ButtonContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 8px;
  margin-bottom: 8px;
  margin-top: 8px;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 20px;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;

  width: 20%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 16px;

  ${media.lessThan("medium")`
    flex-wrap: wrap;
  `}
`;

export const InputPlan = styled.div`
  font-size: 16px;

  ${media.lessThan("medium")`
      width: 100%;
  `}
`;

export const ButtonPlan = styled.div`
    display: flex;
    margin-top: 30px;

    ${media.lessThan("medium")`
      width: 100%;
  `}

`;

export const PlanWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: flex-end;

    margin-top: 20px;


    ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      align-items: center; 

      margin-top: 28px;
  `}
`;

export const SectionPlan = styled.div`
    display: flex;

    flex-direction: column;

    width: 50%;

    ${media.lessThan("medium")`
      width: 100%;
  `}
`;

export const SectionDiet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
`;

export const QrCode = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: end;
    align-items: center;
    

    img {
      width: 25%;
    }
`;

export const ButtonDieta = styled.a`

    align-items: center;
`;

