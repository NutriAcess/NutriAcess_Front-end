import { useState } from "react";
import Select from "react-select";
import { Input } from "../../../../components/input/input";
import { Text } from "../../../../components/text/text";
import { useAuth } from "../../../../hooks/useAuth";
import { Container } from "../../formulario.styles";

import InputCheck from "../InputCheck/InputCheck";
import { Section, SectionGlobalInputs, SectionIam, SectionSex, TitleStap } from "./firsStap.styles";

export const FirstStap = () => {
  const { user } = useAuth();

  const [desire, setDesire] = useState("");
  const [sex, setSex] = useState("");
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
          <Text weight={600} height={20} size="18" color="preto">Eu desejo:</Text>
          <InputCheck label="Perder peso" onChange={(e) => setDesire(e)} value={desire} type="checkbox" />
          <InputCheck label="Manter meu peso atual" onChange={(e) => setDesire(e)} value={desire} type="checkbox" />
          <InputCheck label="Ganhar massa muscular" onChange={(e) => setDesire(e)} value={desire} type="checkbox" />
        </Section>

        <Text weight={600} height={20} size="18" color="preto">Eu sou:</Text>
        <SectionSex>
          <SectionIam>
            <InputCheck label="Feminino" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Masculino" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Não binário" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Homem Trans" onChange={(e) => setSex(e)} value={sex} type="checkbox" />

          </SectionIam>
          <SectionIam>
            <InputCheck label="Mulher Trans" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Fluido" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Outro" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
            <InputCheck label="Prefiro não responder" onChange={(e) => setSex(e)} value={sex} type="checkbox" />
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
