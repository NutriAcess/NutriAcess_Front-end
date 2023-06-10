import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleStap = styled.div`
    margin-top: 20px;
`;

export const SectionGlobalInputs = styled.div`
    margin-top: 30px;
`;

export const Section = styled.div`
    margin-bottom: 20px;
`;

export const DivGender = styled.div`
    margin-bottom: 10px;
`;

export const SectionSex = styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin-bottom: 20px;
    gap: 5px;
    flex-wrap: wrap ;
`;

export const SectionIam = styled.label`
    display: flex;
    gap: 5px;
`;


export const Select = styled.select`
    border: 1px solid ${({theme}) => theme.Colors.vinho};
    width: 25%;
`;