import styled from "styled-components";

interface ITextOperation {
    direction: "row" | "row-reverse",
}

export const Container = styled.div<ITextOperation>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: center;
    justify-content: center;
    padding: 50px;
    margin: 20px 20px;
`;

export const Content = styled.div``;

export const TitleOperation = styled.div`
    max-width: 400px;
    color: ${({theme}) => theme.Colors.laranja_medio};
`;

export const TextOperation = styled.div`
    max-width: 500px;
`;

export const ImageOperation = styled.div`
    margin: 20px 100px;
`;
