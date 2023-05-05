import styled from "styled-components";

interface ITextInfo {
    direction: "row" | "row-reverse",
}

export const Container = styled.div<ITextInfo>`
    display: flex;
    flex-direction: ${({direction}) => direction};
`;

export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    justify-content: center;
    margin-left: 0 auto;
`;

export const TextTitle = styled.div`
    margin-bottom: 20px;
`;

export const TextDescription = styled.div`
`;


export const ImageAbout = styled.div`

`;