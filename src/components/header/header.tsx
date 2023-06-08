import { useAuth } from "../../hooks/useAuth";
import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonContent } from "./header.styles";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"

function Header() {

const { isLogged } = useAuth();
const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Logo />
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end justify-content-xl-around align-items-center">
          <Nav>
            <div onClick={() => navigate("/")} className="mx-3">
              <Nav.Link href="#">Início</Nav.Link>
            </div>
            <div onClick={() => navigate("/agendamentos")} className="mx-3">
              <Nav.Link href="#">Agendamentos</Nav.Link>
            </div>
            <div onClick={() => navigate("/sobre-nos")} className="mx-3">
              <Nav.Link href="#">Equipe</Nav.Link>
            </div>
            <div onClick={() => navigate("/planos")} className="mx-3">
              <Nav.Link href="#">Planos</Nav.Link>
            </div>
            <div onClick={() => navigate("/fale-conosco")} className="mx-3">
              <Nav.Link href="#">Fale Conosco</Nav.Link>
            </div>
          </Nav>
          {!isLogged && (
        <ButtonContent className="d-none d-xl-flex">
          <Button title="Login" variant="primario" xs onClick={() => navigate("/sign-in-esp")} />
          <Button
            xs
            title="Cadastre-se"
            variant="secundario"
            onClick={() => navigate("/sign-up-user")}
          />
        </ButtonContent>
      )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
