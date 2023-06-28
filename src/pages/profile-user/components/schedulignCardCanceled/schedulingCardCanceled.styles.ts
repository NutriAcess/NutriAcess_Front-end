import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;

  border: 1px solid ${({ theme }) => theme.Colors.laranja_destaque};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  background-color: ${({ theme }) => theme.Colors.branco};

  margin-inline: 200px;

  ${media.lessThan("medium")`
    margin-inline: 0;
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
  `}
`;

export const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
