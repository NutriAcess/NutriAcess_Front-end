import Select from "react-select";
import { Input } from "../../../../components/input/input";
import { Text } from "../../../../components/text/text";
import { Container } from "../../formulario.styles";

import { useForm } from "../../../../hooks/useForm";
import {
  FeedingEnum,
  GenderEnum,
  ObjectiveEnum,
} from "../../../../services/authService/authService.types";
import { StyledInput } from "../InputCheck/InputCheck.styles";
import {
  DivGender,
  Section,
  SectionGlobalInputs,
  SectionIam,
  SectionSex,
  TitleStap,
} from "./firsStap.styles";

export const FirstStap = () => {
  const { setForm, form } = useForm();

  const options = [
    { value: "Sedentarismo", label: "Sedentarismo" },
    { value: "Atividade fisica moderada", label: "Atividade física moderada" },
    { value: "Atividade fisica intensa", label: "Atividade física intensiva" },
  ];

  function updateDesireValue(objetivo: ObjectiveEnum) {
    setForm((prev) => ({
      ...prev,
      objetivo,
    }));
  }

  function updateGenderValue(genero: GenderEnum) {
    setForm((prev) => ({
      ...prev,
      genero,
    }));
  }

  function updateHeightValue(value: string) {
    const altura = Number(value);

    setForm((prev) => ({
      ...prev,
      altura,
    }));
  }

  function updateAgeValue(value: string) {
    const idade = Number(value);

    setForm((prev) => ({
      ...prev,
      idade,
    }));
  }

  function updateWeightValue(value: string) {
    const peso = Number(value);

    setForm((prev) => ({
      ...prev,
      peso,
    }));
  }

  function updateFeedingValue(capacidade_fisica: FeedingEnum) {
    setForm((prev) => ({
      ...prev,
      capacidade_fisica,
    }));
  }

  return (
    <Container>
      <TitleStap>
        <Text weight={600} height={16} size="20" color="vinho">
          Etapa 1
        </Text>
      </TitleStap>

      <TitleStap>
        <Text weight={600} height={21} size="20" color="vinho">
          Reconhecimento físico
        </Text>
      </TitleStap>

      <SectionGlobalInputs>
        <Section>
          <DivGender>
            <Text weight={600} height={20} size="18" color="preto">Objetivo:</Text>
          </DivGender>

          <SectionIam>
            <StyledInput
              name="desire"
              onChange={() => updateDesireValue(ObjectiveEnum.lost_weight)}
              value={form.objetivo || ""}
              type="radio"
            />
            Perder peso
          </SectionIam>
          <SectionIam>
            <StyledInput
              name="desire"
              onChange={() =>
                updateDesireValue(ObjectiveEnum.maintain_my_current)
              }
              value={form.objetivo || ""}
              type="radio"
            />
            Manter meu peso atual
          </SectionIam>
          <SectionIam>
            <StyledInput
              name="desire"
              onChange={() =>
                updateDesireValue(ObjectiveEnum.gain_muscular_mass)
              }
              value={form.objetivo || ""}
              type="radio"
            />
            Ganhar massa muscular
          </SectionIam>
        </Section>

        <DivGender>
          <Text weight={600} height={20} size="18" color="preto">
            Gênero
          </Text>
        </DivGender>

        <SectionSex>
          <SectionIam>
            <StyledInput
              name="gender"
              onChange={() => updateGenderValue(GenderEnum.man)}
              value={form.genero || ""}
              type="radio"
            />
            Masculino
          </SectionIam>
          <SectionIam>
            <StyledInput
              name="gender"
              onChange={() => updateGenderValue(GenderEnum.woman)}
              value={form.genero || ""}
              type="radio"
            />
            Feminino
          </SectionIam>

          <SectionIam>
            <StyledInput
              name="gender"
              onChange={() => updateGenderValue(GenderEnum.other)}
              value={form.genero || ""}
              type="radio"
            />
            Outro
          </SectionIam>
        </SectionSex>

        <Section>
          <Input
            type="number"
            placeholder="Altura em cm"
            label="Sua altura:"
            onChange={(e) => updateHeightValue(e)}
            value={String(form.altura) || ""}
          />
          <Input
            type="number"
            label="Sua idade:"
            placeholder="Idade em anos"
            onChange={(e) => updateAgeValue(e)}
            value={String(form.idade) || ""}
          />
          <Input
            type="number"
            label="Seu peso:"
            placeholder="Peso em kg"
            onChange={(e) => updateWeightValue(e)}
            value={String(form.peso) || ""}
          />
        </Section>

        <Text weight={600} height={22} size="20" color="vinho">
          Nível de atividade física
        </Text>
        <Select
          options={options}
          onChange={(e) => updateFeedingValue(e?.value as FeedingEnum)}
        />
      </SectionGlobalInputs>
    </Container>
  );
};
