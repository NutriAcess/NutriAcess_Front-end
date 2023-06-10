import styled from "styled-components";
import media from "styled-media-query";

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
    margin: 0 60px;
`;

export const TextTitle = styled.div`
    margin-bottom: 40px;
`;

export const TextDescription = styled.div`
    line-height: 1.7;
    padding-left: 20px;
`;

export const ImageAbout = styled.div`
     ${media.lessThan("medium")`
    width: 100px;
    height: 100px;
    background-color: blue;
`}
`;