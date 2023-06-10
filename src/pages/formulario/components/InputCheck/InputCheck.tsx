import { ChangeEvent } from "react";
import { Text } from "../../../../components/text/text";
import { InputWrapper, StyledInput } from "./InputCheck.styles";

interface IInputCheck {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  type?: string;
  height?: string;
  name?: string;
}

const InputCheck = ({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  height,
  name,
}: IInputCheck) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        height={height}
        name={name}
      />
      <Text color="preto" size="18" weight={400} height={22}>
        {label}
      </Text>
    </InputWrapper>
  )
}

export default InputCheck