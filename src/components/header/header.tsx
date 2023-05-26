import Button from "../button/button";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import { ButtonContent, Container } from "./header.styles";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navbar />
      <ButtonContent>
        <Button title="Login" variant="primario" />
        <Button title="Cadastre-se" variant="secundario" />
      </ButtonContent>
    </Container>
  );
};

export default Header;
