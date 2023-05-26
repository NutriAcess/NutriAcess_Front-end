import { Check, X } from "@phosphor-icons/react";

import Button from "../../../components/button/button";
import { Text } from "../../../components/text/text";
import {
  Checked,
  Container,
  Description,
  Divbutton,
  Divider,
  Header,
  Price,
  TitleHeader,
  Topico,
  Topics,
} from "./cardPlan.styles";
import { ICardPlan } from "./cardPlan.types";

const CardPlan = ({
  variant,
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
        <Text
          color={destaque === "primario" ? "branco" : "preto"}
          height={26}
          size="20"
          weight={700}
        >
          {titleplan}
        </Text>
      </Header>
      <Price>
        <Text weight={600} height={49} color="preto" size="36">
          R$ {separateValues().inteiro}
          <Text weight={600} height={49} color="preto" size="16">
            ,{separateValues().decimal}
          </Text>
          <Text weight={400} height={49} color="cinza_escuro" size="18">
            /{plan.duration}
          </Text>
        </Text>
      </Price>
      <Description>
        <Text weight={400} height={19} color="cinza_escuro" size="14">
          {description}
        </Text>
      </Description>
      <Divider />
      <Topics>
        {topics.map((item) => (
          <Topico>
            <Checked>
              {item.isChecked ? (
                <Check color="green" weight="bold" size={24} />
              ) : (
                <X color="red" weight="bold" size={24} />
              )}
            </Checked>
            <Text weight={300} height={19} color="preto" size="16">
              {item.title}
            </Text>
          </Topico>
        ))}
      </Topics>
      <Divbutton>
        <Button variant={variant} title="Assinar" />
      </Divbutton>
    </Container>
  );
};

export default CardPlan;
