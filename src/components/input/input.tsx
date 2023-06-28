import React, { ChangeEvent, useState } from "react";
import { Text } from "../text/text";
import { InputWrapper, Option, OptionsContainer, StyledInput } from "./input.styles";

interface InputProps {
  label: string;
  value: string;
  className?: string;
  placeholder?: string;
  type?: string;
  options?: string[];
  onChange: (value: string) => void;
  height?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  className,
  placeholder,
  type = "text",
  onChange,
  height,
  options = [], 
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleOptionSelect = (option: string) => {
    onChange(option);
    setShowOptions(false); // Fechar as opções depois de selecionar
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <InputWrapper>
      <Text color="vinho" size="20" weight={600} height={22}>
        {label}
      </Text>
      <StyledInput
        className={className ? className : ''}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        height={height}
      />
      {showOptions && (
        <OptionsContainer>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </InputWrapper>
  );
};
