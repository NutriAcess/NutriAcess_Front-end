import { useState } from "react"
import Select from "react-select"
import { Text } from "../../../../components/text/text"
import InputCheck from "../InputCheck/InputCheck"
import { Container, Section, SectionEat, TitleStap } from "./secondStap.styles"
import { DivGender, SectionIam } from "../firstStap/firsStap.styles"
import { StyledInput } from "../InputCheck/InputCheck.styles"

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
                <DivGender>
                    <Text weight={600} height={21} size="18" color="preto">Como funciona a sua alimentação no dia a dia?</Text>
                </DivGender>

                <SectionIam>
                    <StyledInput name="food" onChange={(e) => setFood(e.target.value)} value={food} type="radio" />
                        Como qualquer coisa
                </SectionIam>

                <SectionIam>                
                    <StyledInput name="food" onChange={(e) => setFood(e.target.value)} value={food} type="radio" />
                    Sou vegetariano(a)
                </SectionIam>

                <SectionIam>                
                    <StyledInput name="food" onChange={(e) => setFood(e.target.value)} value={food} type="radio" />
                        Sou vegano(a)
                </SectionIam>

                
            </Section>

            <Section>
                <Text weight={600} height={21} size="18" color="preto">Você tem alguma alergia?</Text>
                <Select isMulti options={options} />
            </Section>

            <Section>
                <SectionEat>
                    <Text weight={600} height={21} size="18" color="preto">Você costuma ter tempo para preparar suas refeições?</Text>
                    <div>
                
                        <SectionIam>                
                            <StyledInput  name="timeat" onChange={(e) => setEat(e.target.value)} value={eat} type="radio" />
                            Sim
                        </SectionIam>
                        <SectionIam>
                            <StyledInput name="timeat" onChange={(e) => setEat(e.target.value)} value={eat} type="radio" />
                                Não
                        </SectionIam>
                    </div>
                </SectionEat>
            </Section>
        </Container>
    )
}