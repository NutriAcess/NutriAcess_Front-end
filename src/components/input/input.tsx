import React, { ChangeEvent } from "react";
import { Text } from "../text/text";
import { InputWrapper, StyledInput } from "./input.styles";

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
  height?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  height,
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
        height={height}
      />
    </InputWrapper>
  );
};
