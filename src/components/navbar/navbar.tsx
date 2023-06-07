import { useNavigate } from "react-router-dom";
import { Container, LinkContainer, NavLinks } from "./navbar-styles";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <LinkContainer>
        <div onClick={() => navigate("/")}>
          <NavLinks>Início</NavLinks>
        </div>
        <div onClick={() => navigate("/agendamentos")}>
          <NavLinks href="#">Agendamentos</NavLinks>
        </div>
        <div onClick={() => navigate("/sobre-nos")}>
          <NavLinks href="#">Equipe</NavLinks>
        </div>
        <div onClick={() => navigate("/planos")}>
          <NavLinks href="#">Planos</NavLinks>
        </div>
        <div onClick={() => navigate("/fale-conosco")}>
          <NavLinks href="#">Fale Conosco</NavLinks>
        </div>
      </LinkContainer>
    </Container>
  );
};

export default Navbar;
