import { Container } from "../header/header.styles";
import ImagemLogo from "../../assets/logo.svg"

const Logo = () => {
    return (
        <Container>
            <img src={ImagemLogo} alt="" />
        </Container>
    )
}

export default Logo;