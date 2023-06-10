import styled from "styled-components";
import media from "styled-media-query";

interface ITextInfo {
    direction: "row" | "row-reverse",
}

export const Container = styled.div<ITextInfo>`
    display: flex;
    flex-direction: ${({direction}) => direction};

    ${media.lessThan("medium")`
        display: flex;
        flex-direction:column;
    `}
`;

export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    justify-content: center;
    margin: 0 60px;

    ${media.lessThan("small")`
        margin: 0px;
        align-items: justify;
        width: 375px;
        text-align: center;
        padding:10px;
        margin-top:20px;
    `}
`;

export const TextTitle = styled.div`
    margin-bottom: 40px;
`;

export const TextDescription = styled.div`
    padding-left: 20px;

    ${media.lessThan("medium")`
        padding: 0px;
    `}
`;

export const ImageAbout = styled.div`
    
    ${media.lessThan("medium")`
`}

    ${media.lessThan("small")`

    img {
        width: 375px;
    }
    
`}

`;