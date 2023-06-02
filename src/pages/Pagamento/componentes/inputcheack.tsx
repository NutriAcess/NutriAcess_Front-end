import React from 'react';
import styled from 'styled-components';

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const StyledCheckboxInput = styled.input`
  appearance: none;
  display:flex;
  width: 50px;
  height: 35px;
  border: 2px solid #7419446a;
  margin-left: 2%;
  margin-top: 2%;
  
;
  border-radius: 10px;
  margin-right: 8px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:checked::after {
    content: '\\2713';
   display:flex;
    border-radius: 10px;
    
    height: 110%;
    margin-top: 48%;
    margin-left: 49%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    margin-right:50%;
    padding-right:10px;
    background-color: #F2C438

     

  }
`;

const StyledCheckboxText = styled.span`
  font-size: 20px;
  display: flex;
  margin-top: 2%;
  margin-right: 30px;
  width: 100%;
`;

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, text }) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckboxInput type="checkbox" name={name} checked={checked} onChange={onChange} />
      <StyledCheckboxText>{text}</StyledCheckboxText>
    </StyledCheckboxLabel>
  );
};

export default Checkbox;