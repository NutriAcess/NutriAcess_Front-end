import styled from "styled-components";

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

  padding: 12px;

  justify-content: center;

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

  margin-top: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  width: 20%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 16px;
`;

export const InputPlan = styled.div`

`;

export const ButtonPlan = styled.div`
    display: flex;
    margin-top: 30px;

`;

export const PlanWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: flex-end;
    margin-top: 30px;
`;

export const SectionPlan = styled.div`
    display: flex;

    flex-direction: column;

    width: 50%;
`;

export const SectionDiet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const QrCode = styled.div`
    margin-bottom: 30px;
`;