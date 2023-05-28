import React, { ChangeEvent } from "react";
import { InputWrapper, Label, StyledInput } from "./input.styles";

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
