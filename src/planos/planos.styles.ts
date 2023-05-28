import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Emphasis = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    height: 418px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const SectionPlan = styled.div`
    margin-top: 200px;
`;