import styled from "styled-components";

export const Container = styled.div `
  display: flex;

  align-items: center;
`;

export const InputStyled = styled.input `
  border-color: ${({theme}) => theme.Colors.vinho};

  border-radius: 6px;

  padding: 24px 200px;
  
  font-size: 1rem;

  border-bottom-right-radius: 0; 
  border-top-right-radius: 0;
  
`;

export const Button = styled.button `
background-color: ${({theme}) => theme.Colors.vinho};

border-radius: 6px;

padding: 1.1rem 2rem;

border-bottom-left-radius: 0; 
border-top-left-radius: 0;
`;


