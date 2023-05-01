import Header from "../components/header/header";
import Destaque from "./destaque";
import ImagemDestaque from "../assets/background.svg"

import { Container,ImageWrapper } from "./home.styles";

const Home = () => {
  return (
    <Container>
        <Header/>
        <ImageWrapper>
          <img src={ImagemDestaque} alt="" width='100%'/>
        </ImageWrapper>
    </Container>
  )
};

export default Home;