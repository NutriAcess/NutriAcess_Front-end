import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
`;

export const InputStyled = styled.input`
  border-color: ${({ theme }) => theme.Colors.vinho};
  border-radius: 6px;
  width: 700px;
  height: 60px;
  padding: 12px;
  font-size: 1rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;

  ${media.lessThan("medium")`
    padding: 24px 20px;
    width: 700px;
    margin-left: 400px;
    
    
  `}

  ${media.lessThan("small")`
    width: 290px;
    height: 60px;

    margin-left: -2px;
  `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.Colors.vinho};
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    display: flex;
    align-items: center;

    width: 70px;
    height: 60px;
  `}

  ${media.lessThan("small")`
    
  `}
`;
