import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.Colors.laranja_medio};
    height: 300px;
    width: 300px;
    margin: 0 20px;
    padding: 30px 30px;
    border-radius: 30px;

    &:hover{
        background-color: ${({theme}) => theme.Colors.branco};
    }
`;

export const TitleData = styled.div`
    margin: 10px 0;

    &:hover{
        color: ${({theme}) => theme.Colors.preto};
    }
`;

export const TextData = styled.div``;

export const Text = styled.div`

    &:hover {
        color: ${({theme}) => theme.Colors.preto}
    }
`;