import ImagemDestaque from "../assets/foto-interna-de-mulher-feliz-comendo-maca (1) 2.svg"
import { TextDestaque } from "./destaque.styles";
import { Container } from "./home.styles";

const Destaque = () => {
  return (
    <Container>
      <TextDestaque>Nutra sua saúde e bem estar com a NutriAcess</TextDestaque>
      <img src={ImagemDestaque} alt="Mulher feliz comendo maça"/>
    </Container>
  )
};

export default Destaque;