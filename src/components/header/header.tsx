import { useAuth } from "../../hooks/useAuth";
import Button from "../button/button";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import { ButtonContent, Container } from "./header.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <Logo />
      <Navbar />
      {!isLogged && (
        <ButtonContent>
          <Button title="Login" variant="primario" xs onClick={() => navigate("/sign-in-esp")} />
          <Button
            xs
            title="Cadastre-se"
            variant="secundario"
            onClick={() => navigate("/sign-up-user")}
          />
        </ButtonContent>
      )}
    </Container>
  );
};

export default Header;
