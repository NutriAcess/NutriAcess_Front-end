import imageNutricionista from "../../assets/logonutriacess.svg";
import Header from "../../components/header/header";
import { CardMarcarConsulta } from "./CardMarcarConsulta/CardMarcarConsulta";
import { Container } from "./marcarConsulta.styles";

export const MarcarConsulta = () => {
  return (
    <Container>
      <Header />
      <CardMarcarConsulta
        image={{
          url: imageNutricionista,
          alt: "Imagem Nutricionista Gabriella",
        }}
        nutricionist="Camilla Gabriella"
      />
    </Container>
  );
};
