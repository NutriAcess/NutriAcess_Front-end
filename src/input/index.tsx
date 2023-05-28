import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;
  top: 50%;
  left: 50%;
  transform:translate(0%, 180%);
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 1%;
  right: 19%;
  font-weight: bold;
  color: #731943;
`;

const StyledInput = styled.input`
   padding: 8px;
  width: 40%;
  border-radius: 5px;
  font-size: 16px;
  border:none;
  border: #731943 solid 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Input: React.FC<InputProps> = ({ label, value, placeholder, type = 'text', onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput type={type} value={value} placeholder={placeholder} onChange={handleChange} />
    </InputWrapper>
  );
};
