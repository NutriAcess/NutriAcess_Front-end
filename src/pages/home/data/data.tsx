import { Text } from "../../../components/text/text";
import CardData from "../components/cardData/cardData";
import { CardsData, Container, TitleDestaqueData } from "./data.styles";

const Data = () => {
  return (
    <Container>
      <TitleDestaqueData>
        <Text weight={700} height={42} size="32" color="branco">
          Dados da Pesquisa Nacional de Saúde (PNS)
        </Text>
      </TitleDestaqueData>

      <CardsData>
        <CardData
          title="Excesso de peso em adultos"
          description="Mais da metade dos adultos apresenta excesso de peso (60,3%, o que representa 96 milhões de pessoas)."
        />
        <CardData
          title="Obesidade com os adultos"
          description="Já a condição de obesidade atinge 25,9% da população, alcançando 41,2 milhões de adultos."
        />
        <CardData
          title="Excesso de peso em crianças"
          description="31,7% das crianças entre 5 e 9 anos tinham excesso de peso, acompanhadas na Atenção Primária à Saúde (APS) do SUS."
        />
        <CardData
          title="Obesidade com as crianças"
          description="E dessas 15,8%, respectivamente,apresentavam obesidade segundo Índice de Massa Corporal (IMC) para idade."
        />
      </CardsData>
    </Container>
  );
};

export default Data;
