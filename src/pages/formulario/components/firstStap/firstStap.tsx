import { useState } from "react";
import Select from "react-select";
import { Input } from "../../../../components/input/input";
import { Text } from "../../../../components/text/text";
import { useAuth } from "../../../../hooks/useAuth";
import { Container } from "../../formulario.styles";

import { DivGender, Section, SectionGlobalInputs, SectionIam, SectionSex, TitleStap } from "./firsStap.styles";
import { StyledInput } from "../InputCheck/InputCheck.styles";

export const FirstStap = () => {
  const { user } = useAuth();

  const [desire, setDesire] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const options = [
    { value: "Sedentarismo", label: "Sedentarismo" },
    { value: "Atividade física moderada", label: "Atividade física moderada" },
    { value: "Atividade física intensiva", label: "Atividade física intensiva" },
  ]

  return (
    <Container>
      <TitleStap>
        <Text weight={600} height={16} size="20" color="vinho">Etapa 1</Text>
      </TitleStap>

      <TitleStap>
        <Text weight={600} height={21} size="20" color="vinho">Reconhecimento físico</Text>
      </TitleStap>

      <SectionGlobalInputs>
        <Section>

          <DivGender>
            <Text weight={600} height={20} size="18" color="preto">Eu desejo:</Text>
          </DivGender>

          <SectionIam>
            <StyledInput name="desire" onChange={(e) => setDesire(e.target.value)} value={desire} type="radio" />
            Perder Peso.
          </SectionIam>
          <SectionIam>
          <StyledInput name="desire" onChange={(e) => setDesire(e.target.value)} value={desire} type="radio" />
          Manter meu peso atual.
          </SectionIam>
          <SectionIam>
          <StyledInput name="desire" onChange={(e) => setDesire(e.target.value)} value={desire} type="radio" />
          Ganhar massa muscular.
          </SectionIam>
        </Section>

        <DivGender>
        <Text weight={600} height={20} size="18" color="preto">Gênero</Text>
        </DivGender>

        <SectionSex>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Masculino
          </SectionIam>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Feminino
          </SectionIam>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Não binário
          </SectionIam>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Homem Trans
          </SectionIam>

          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Mulher Trans
          </SectionIam>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Fluido
          </SectionIam>  
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Outro
          </SectionIam>
          <SectionIam>
            <StyledInput name="gender"  onChange={(e) => setGender(e.target.value)} value={gender} type="radio" />
            Prefiro não responder
          </SectionIam>

        </SectionSex>

        <Section>
          <Input label="Sua altura:" onChange={(e) => setHeight(e)} value={height} />
          <Input label="Sua idade:" onChange={(e) => setAge(e)} value={age} />
          <Input label="Seu peso:" onChange={(e) => setWeight(e)} value={weight} />
        </Section>


        <Text weight={600} height={22} size="20" color="vinho">Nível de atividade física</Text>
        <Select options={options} />
      </SectionGlobalInputs>

    </Container>
  )
}
