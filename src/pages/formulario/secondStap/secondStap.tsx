import { useState } from "react"
import Select from "react-select"
import { Text } from "../../../components/text/text"
import InputCheck from "../components/InputCheck"

import { Container, Section, SectionEat, TitleStap } from "./secondStap.styles"

export const SecondStap = () => {
    const options = [
        { value: "Glúten", label: "Glúten" },
        { value: "Laticínios", label: "Laticínios" },
        { value: "Amendoim", label: "Amendoim" },
        { value: "Peixes", label: "Peixes" },
        { value: "Ovos", label: "Ovos" },
        { value: "Mariscos", label: "Mariscos" },
    ]

    const [food, setFood] = useState("");
    const [eat, setEat] = useState("");

    return (
        <Container>
            <TitleStap>
                <Text weight={600} height={16} size="20" color="vinho">Etapa 2</Text>
            </TitleStap>

            <TitleStap>
                <Text weight={600} height={21} size="20" color="vinho">Preferências</Text>
            </TitleStap>

            <Section>
                <Text weight={600} height={21} size="18" color="preto">Como funciona a sua alimentação no dia a dia?</Text>
                <InputCheck label="Qualquer coisa" onChange={(e) => setFood(e)} value={food} type="checkbox" />
                <InputCheck label="Sou vegetariano(a)" onChange={(e) => setFood(e)} value={food} type="checkbox" />
                <InputCheck label="Sou vegano(a)" onChange={(e) => setFood(e)} value={food} type="checkbox" />
            </Section>

            <Section>
                <Text weight={600} height={21} size="18" color="preto">Você tem alguma alergia?</Text>
                <Select isMulti options={options} />
            </Section>

            <Section>
                <SectionEat>
                    <Text weight={600} height={21} size="18" color="preto">Você costuma ter tempo para preparar suas refeições?</Text>
                    <div>
                        <InputCheck label="Sim" onChange={(e) => setEat(e)} value={eat} type="checkbox" />
                        <InputCheck label="Não" onChange={(e) => setEat(e)} value={eat} type="checkbox" />
                    </div>
                </SectionEat>
            </Section>
        </Container>
    )
}