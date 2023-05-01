import Button from "../button/button";
import Navbar from "../navbar/navbar"
import { Container, ButtonContent } from "./header.styles"
import Logo from "../logo/logo";


const Header = () => {
    return (
        <Container>
            <Logo/>
            <Navbar/>
            <ButtonContent>
                <Button title="Login" variant="primario"/>
                <Button title="Cadastre-se" variant="secundario"/>
            </ButtonContent>
        </Container>
    )
}

export default Header;