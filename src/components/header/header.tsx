import { useAuth } from "../../hooks/useAuth";
import Button from "../button/button";
import Logo from "../logo/logo";
import { ButtonContent } from "./header.styles";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PopUp } from "../popupcadastro/popup";
import { PopUpLogin } from "../popuplogin/popuplogin";

function Header() {
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Logo />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end justify-content-xl-around align-items-center"
        >
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
            <ButtonContent>
              <Button
                title="Login"
                variant="primario"
                onClick={() => setOpenPopupLogin(true)}
              />
              <PopUpLogin
                open={openPopupLogin} 
                onClose={() => setOpenPopupLogin(false)} 
              />
              <Button
                title="Cadastre-se"
                variant="secundario"
                onClick={() => setOpenPopupRegister(true)}
              />
              <PopUp
                open={openPopupRegister} 
                onClose={() => setOpenPopupRegister(false)} 
              />
            </ButtonContent>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
