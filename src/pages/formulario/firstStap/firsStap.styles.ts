import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleStap = styled.div`
    margin: 10px 0px;
`;

export const SectionGlobalInputs = styled.div`
    margin-top: 30px;
`;

export const Section = styled.div`
    margin-bottom: 20px;
`;

export const SectionSex = styled.div`
    display: flex;
    gap:10px;
    margin-bottom: 20px;
`;

export const SectionIam = styled.div`
    
`;


export const Select = styled.select`
    border: 1px solid ${({theme}) => theme.Colors.vinho};
    width: 25%;
`;