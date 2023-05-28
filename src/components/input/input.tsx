import React, { ChangeEvent } from "react";
import { InputWrapper, StyledInput } from "./input.styles";
import { Text } from "../text/text";

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
      <Text color="vinho" size="20" weight={600} height={22}>
        {label}
      </Text>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
