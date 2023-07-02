import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import avatarAbacaxi from "../../assets/avatarAbacaxi.png";
import avatarLaranja from "../../assets/avatarLaranja.png";
import avatarMaca from "../../assets/avatarMaca.png";
import avatarUva from "../../assets/avatarUva.png";
import { useAuth } from "../../hooks/useAuth";
import Button from "../button/button";
import Logo from "../logo/logo";
import { PopUpLogin } from "../popuplogin/popuplogin";
import { ButtonContent, ButtonProfile, Link } from "./header.styles";

const fotos: any = {
  avatarUva,
  avatarMaca,
  avatarLaranja,
  avatarAbacaxi
}

function Header() {
  const [openPopupRegister, setOpenPopupRegister] = useState(false);
  const [openPopupLogin, setOpenPopupLogin] = useState(false);
  const { profile, logoutUser, isLogged } = useAuth();
  const navigate = useNavigate();

  // console.log("header", profile)

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
            <Link>
            <div onClick={() => navigate("/")} className="mx-3">
              <Nav.Link href="#">Início</Nav.Link>
            </div>
            </Link>
            <Link>
            <div onClick={() => navigate("/agendamentos")} className="mx-3">
              <Nav.Link href="#">Agendamentos</Nav.Link>
            </div>
            </Link>
            <Link>
            <div onClick={() => navigate("/sobre-nos")} className="mx-3">
              <Nav.Link href="#">Equipe</Nav.Link>
            </div>
            </Link>
            <Link>
            <div onClick={() => navigate("/planos")} className="mx-3">
              <Nav.Link href="#">Planos</Nav.Link>
            </div>
            </Link>
            <Link>
            <div onClick={() => navigate("/fale-conosco")} className="mx-3">
              <Nav.Link href="#">Fale Conosco</Nav.Link>
            </div>
            </Link>
          </Nav>
          {
            !isLogged ? (
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
                  onClick={() => navigate("/sign-up-user")}
                />
              </ButtonContent>
            ) : <>
            <div>
            <ButtonProfile onClick={() => navigate("/profile-user")}>
              {profile!==null ? <img src={fotos[profile.foto]} alt="" /> : <img src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" alt="" />}
              <button onClick={() => logoutUser()}>Sair</button>
              </ButtonProfile>

              </div>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
