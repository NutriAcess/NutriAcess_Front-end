import { useState } from "react";
import { Button, Container, InputStyled } from "./input.styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Input = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <Container>
      <InputStyled
        placeholder="Digite o nome do seu especialista!"
        size={30}
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>
        <MagnifyingGlass color="#fff" weight="bold" size={32} />
      </Button>
    </Container>
  );
};

export default Input;
