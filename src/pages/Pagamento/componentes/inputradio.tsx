import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../components/text/text';

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 20px;
`;

const StyledRadioInput = styled.input`
  appearance: none;
  display:flex;
  width: 17px;
  height: 17px;
  border: 2px solid ${({ theme }) => theme.Colors.amarelo};
  border-radius: 50px;
  margin-right: 8px;
  cursor: pointer;

  &:checked::before {
    content: '';
    display:flex;
    margin-top: 2px;
    margin-left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.Colors.amarelo};
  }
`;

const StyledRadioText = styled.span`
  font-family: 'Lato', sans-serif;
`;

interface RadioProps {
  
}

const Radio: React.FC<RadioProps> = ({}) => {
  return (
    <StyledRadioLabel>
      <StyledRadioInput type="radio"/>
      <StyledRadioText><Text color='preto'  height={20} size='20'  weight={600} > Cartão de crédito </Text></StyledRadioText>
    </StyledRadioLabel>
  );
};

export default Radio;
