import Select from "react-select";
import { Text } from "../../../../components/text/text";
import { Container, Section, SectionEat, TitleStap } from "./secondStap.styles";
import { DivGender, SectionIam } from "../firstStap/firsStap.styles";
import { StyledInput } from "../InputCheck/InputCheck.styles";
import { useForm } from "../../../../hooks/useForm";
import {
  AvatarsEnum,
  FoodRestrictionEnum,
  PreparationTimeEnum,
} from "../../../../services/authService/authService.types";

export const SecondStap = () => {
  const { form, setForm } = useForm();

  const options = [
    { value: "Glúten", label: "Glúten" },
    { value: "Laticínios", label: "Laticínios" },
    { value: "Amendoim", label: "Amendoim" },
    { value: "Peixes", label: "Peixes" },
    { value: "Ovos", label: "Ovos" },
    { value: "Mariscos", label: "Mariscos" },
  ];

  function updateFoodRestrictionValue(
    restricao_alimentar: FoodRestrictionEnum
  ) {
    setForm((prev) => ({
      ...prev,
      restricao_alimentar,
    }));
  }

  function updateAllergyValue(allergy: string) {
    console.log(allergy);
  }

  function updatePreparationTimeValue(tempo_preparo: PreparationTimeEnum) {
    setForm((prev) => ({
      ...prev,
      tempo_preparo,
    }));
  }

  return (
    <Container>
      <TitleStap>
        <Text weight={600} height={16} size="20" color="vinho">
          Etapa 2
        </Text>
      </TitleStap>

      <TitleStap>
        <Text weight={600} height={21} size="20" color="vinho">
          Preferências
        </Text>
      </TitleStap>

      <Section>
        <DivGender>
          <Text weight={600} height={21} size="18" color="preto">
            Como funciona a sua alimentação no dia a dia?
          </Text>
        </DivGender>

        <SectionIam>
          <StyledInput
            name="food"
            onChange={() =>
              updateFoodRestrictionValue(FoodRestrictionEnum.any_thing)
            }
            value={form.restricao_alimentar}
            type="radio"
          />
          Qualquer coisa
        </SectionIam>

        <SectionIam>
          <StyledInput
            name="food"
            onChange={() =>
              updateFoodRestrictionValue(FoodRestrictionEnum.vegetarian)
            }
            value={form.restricao_alimentar}
            type="radio"
          />
          Sou vegetariano(a)
        </SectionIam>

        <SectionIam>
          <StyledInput
            name="food"
            onChange={() =>
              updateFoodRestrictionValue(FoodRestrictionEnum.vegan)
            }
            value={form.restricao_alimentar}
            type="radio"
          />
          Sou vegano(a)
        </SectionIam>
      </Section>

      <Section>
        <Text weight={600} height={21} size="18" color="preto">
          Você tem alguma alergia?
        </Text>
        <Select
          options={options}
          onChange={(e) => updateAllergyValue(e?.label as string)}
        />
      </Section>

      <Section>
        <SectionEat>
          <Text weight={600} height={21} size="18" color="preto">
            Você costuma ter tempo para preparar suas refeições?
          </Text>
          <div>
            <SectionIam>
              <StyledInput
                name="timeat"
                onChange={() =>
                  updatePreparationTimeValue(PreparationTimeEnum.yes)
                }
                value={form.tempo_preparo}
                type="radio"
              />
              Sim
            </SectionIam>
            <SectionIam>
              <StyledInput
                name="timeat"
                onChange={() =>
                  updatePreparationTimeValue(PreparationTimeEnum.not)
                }
                value={form.tempo_preparo}
                type="radio"
              />
              Não
            </SectionIam>
          </div>
        </SectionEat>
      </Section>
    </Container>
  );
};
