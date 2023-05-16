import Button from "../button/button";
import Navbar from "../navbar/navbar";
import { Container, ButtonContent } from "./header.styles";
import Logo from "../logo/logo";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navbar />
      <ButtonContent>
        <Button
          title="Login"
          variant="primario"
          border={10}
          padding={12}
          width={100}
          size={14}
        />
        <Button
          title="Cadastre-se"
          variant="secundario"
          border={10}
          padding={12}
          width={150}
          size={14}
        />
      </ButtonContent>
    </Container>
  );
};

export default Header;
