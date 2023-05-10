import { Button, Container, InputStyled } from "./input.styles";
import { MagnifyingGlass } from "@phosphor-icons/react";



const Input = () => {
  return (
    <Container>
      
      <InputStyled placeholder="Digite o nome do seu especialista!" size={30}/>
      
      <Button>
      <MagnifyingGlass color="#fff" weight="bold" size={32}/>
      </Button>
      
    </Container>
  )
}

export default Input;