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
  height: 16px;
  border: 2px solid ${({ theme }) => theme.Colors.amarelo};
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;

  &:checked::before {
    content: '';
    display:flex;
    margin-top: 2px;
    margin-left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.Colors.amarelo};
  }
`;

const StyledRadioText = styled.span`
  font-family: 'Lato', sans-serif;
`;

interface RadioProps {
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ value, name, checked, onChange }) => {
  return (
    <StyledRadioLabel>
      <StyledRadioInput type="radio" value={value} name={name} checked={checked} onChange={onChange} />
      <StyledRadioText><Text color='preto'  height={20} size='20'  weight={600} > Cartão de crédito </Text></StyledRadioText>
    </StyledRadioLabel>
  );
};

export default Radio;
