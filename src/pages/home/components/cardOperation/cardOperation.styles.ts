import styled from "styled-components";

interface ITextOperation {
    direction: "row" | "row-reverse",
}

interface IIcon {
    icon: boolean;
}

export const Container = styled.div<ITextOperation>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    align-items: center;
    justify-content: center;
    margin: 30px;
`;

export const Content = styled.div``;

export const Icon = styled.div<IIcon>`
    color: ${({theme}) => theme.Colors.amarelo};
    margin-bottom: 100px;
    margin-right: 10px;
`;

export const TitleOperation = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextOperation = styled.div`
    max-width: 400px;
    margin-bottom: 20px;
`;

export const TextDescription = styled.div`
    margin-top: 20px;
`;

export const ImageOperation = styled.div`
    margin: 20px 100px;

    
`;

export const Text = styled.div``;
