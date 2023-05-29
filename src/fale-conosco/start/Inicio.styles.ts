import styled from "styled-components";

export const Container = styled.div`
background-color: ${({theme}) => theme.Colors.amarelo};
width: 100%;
height: 50vh;
padding: 30px;
`;

export const DivSubImg = styled.div`
display:flex;
justify-content:space-around;
height:190px;
width:100%;
align-items:center;
`;

export const Title = styled.h1`
text-align:center;
border-bottom: 3px #731943 solid;
max-width: 220px;
margin: 0 auto;
`;

export const SubTitle = styled.div`
width: 673px;
margin-top:100px;
`;

export const ImgStyled = styled.img`
width: 360px;
height: 300px;
margin-top: 7rem;

`;