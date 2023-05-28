import { Container, LinkContainer, NavLinks } from "./navbar-styles";

const Navbar = () => {
  return (
    <Container>
      <LinkContainer>
        <NavLinks href="#">Início</NavLinks>

        <NavLinks href="#">Agendamentos</NavLinks>

        <NavLinks href="#">Sobre nós</NavLinks>

        <NavLinks href="#">Planos</NavLinks>

        <NavLinks href="#">Fale Conosco</NavLinks>
      </LinkContainer>
    </Container>
  );
};

export default Navbar;
