import { Container } from "../header/header.styles";
import ImagemLogo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/")}>
      <img src={ImagemLogo} alt="" />
    </Container>
  );
};

export default Logo;
