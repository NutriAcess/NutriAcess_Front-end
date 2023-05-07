import styled from "styled-components";

interface ITextOperation {
    direction: "row" | "row-reverse",
}

export const Container = styled.div<ITextOperation>`
    display: flex;
    flex-direction: ${({direction}) => direction};
`;

export const Content = styled.div``;

export const TitleOperation = styled.div``;

export const TextOperation = styled.div``;

export const ImageOperation = styled.div``;
