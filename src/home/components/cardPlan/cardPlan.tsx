import { Text } from "../../../components/text/text";
import { Check, X } from "@phosphor-icons/react";
import {
  Checked,
  Container,
  Description,
  Header,
  Price,
  TitleHeader,
  Topico,
  Topics,
} from "./cardPlan.styles";

interface ICardPlan {
  titleplan: string;
  destaque: "primario" | "secundario";
  shadow: "primario" | "secundario";
  description: string;
  plan: {
    value: number;
    duration: string;
  };
  topics: {
    isChecked: boolean;
    title: string;
  }[];
}

const CardPlan = ({
  titleplan,
  destaque,
  shadow,
  description,
  plan,
  topics,
}: ICardPlan) => {
  function separateValues() {
    const inteiro = Math.floor(plan.value);
    const decimal = (plan.value - inteiro).toFixed(2).toString().slice(-2);

    return {
      inteiro,
      decimal,
    };
  }

  return (
    <Container shadow={shadow}>
      <Header destaque={destaque}>
        <TitleHeader>{titleplan}</TitleHeader>
      </Header>
      <Price>
        <Text weight={600} height={1.2} color="preto" size="36">
          R$ {separateValues().inteiro}
          <Text weight={600} height={1.2} color="preto" size="16">
            ,{separateValues().decimal}
          </Text>
          <Text weight={600} height={1.2} color="cinza_escuro" size="16">
            /{plan.duration}
          </Text>
        </Text>
      </Price>
      <Description>
        <Text weight={300} height={1.2} color="preto" size="16">
          {description}
        </Text>
      </Description>
      <Topics>
        {topics.map((item) => (
          <Topico>
            <Checked>
              {item.isChecked ? (
                <Check color="green" weight="bold" size={25} />
              ) : (
                <X color="red" weight="bold" size={25} />
              )}
            </Checked>
            <Text weight={300} height={2} color="preto" size="16">
              {item.title}
            </Text>
          </Topico>
        ))}
      </Topics>
    </Container>
  );
};

export default CardPlan;
