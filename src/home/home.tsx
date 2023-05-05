import Header from "../components/header/header";
import { Container, DivButton, ImageWrapper } from "./home.styles";
import Button from "../components/button/button";
import { Text } from "../components/text/text";
import Sobre from "./sobre/sobre";

const Home = () => {
  return (
    <Container>
      <Header />

      <ImageWrapper>
        <Text weight={600} height={1.7} color="vinho" size="64">
          Nutra sua saúde e bem estar com a NutriAcess
        </Text>
        <DivButton>
          <Button variant="primario" title="Conheça nossos planos" />
        </DivButton>
      </ImageWrapper>

      <Sobre />
    </Container>
  );
};

export default Home;
