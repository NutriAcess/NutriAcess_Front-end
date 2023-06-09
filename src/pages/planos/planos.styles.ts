import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div``;

export const HeaderPlans = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.Colors.amarelo};
    height: 420px ;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap:60px;

    ${media.lessThan("medium")`
   font-size: 10%;
   width: 100%;
   text-align: center;
`}
`;

export const Imagem = styled.div`
    margin-top: -100px;

    ${media.lessThan("medium")`
        display: none;
        margin-top: -170px ;
`}
`;

export const SectionMeet = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
    gap:100px;

    ${media.lessThan("medium")`
   flex-direction: column;
   flex-wrap: wrap;
   font-size: 20px;
  `}
`;

export const SectionText = styled.div`
    display: flex;

    flex-direction: column;
    gap:24px;
    width: 425px;

    align-items: center;
    justify-content: center;

    text-align: center;

    ${media.lessThan("medium")`
    width: 300px;
    margin-top: 70px;
`}
`;

export const SectionPlans = styled.div`
    display: flex;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
`;