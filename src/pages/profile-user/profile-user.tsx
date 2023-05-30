import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { useState } from "react";
import QRCODE from "../../assets/qrcode.svg";
import Button from "../../components/button/button";
import Header from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Modal } from "../../components/modal/modal";
import { Text } from "../../components/text/text";
import { SchedulingCard } from "../profile-user/components/schedulignCard/schedulingCard";
import { SchedulingPlan } from "./components/schedulignPlan/schedulingPlan";
import {
    ButtonContent,
    ButtonPlan,
    ButtonWrapper,
    Container,
    Cover,
    Form,
    Info,
    InputPlan,
    InputWrapper,
    PlanWrapper,
    QrCode,
    Scheduling,
    SchedulingCardsPlan,
    SchedulingCardsWrapper,
    SectionDiet,
    SectionPlan,
    TextWrapper,
    TitlePlan,
    User,
    UserDetails,
    UserWrapper
} from "./profile-user.styles";

export const ProfileUser = () => {
    const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [socialName, setSocialName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [imc, setImc] = useState("");
    const [sex, setSex] = useState("");
    const [plan, setPlan] = useState("");

    return (
        <Container>
            <Header />
            <Cover>
                <UserDetails>
                    <Text color="branco" height={42} size="36" weight={500}>
                        Dashboard - olá John
                    </Text>
                    <UserWrapper>
                        <User
                            src="https://github.com/Luisjunior119.png"
                            alt="Foto do usuário"
                        />
                        <Info>
                            <TextWrapper>
                                <Text color="branco" height={29} size="24" weight={500}>
                                    Meu perfil
                                </Text>
                            </TextWrapper>
                            <Button
                                onClick={() => setShowModal(true)}
                                title="Visualizar perfil"
                                variant="terciario"
                            />
                        </Info>
                    </UserWrapper>
                </UserDetails>
            </Cover>

            <Scheduling>
                <Text color="branco" height={26} size="22" weight={500}>
                  Histórico de Consultas
                </Text>
            </Scheduling>

            <SchedulingCardsWrapper>
                <SchedulingCard />
                <SchedulingCard />
                <SchedulingCard />
            </SchedulingCardsWrapper>

            
            <TitlePlan>
                <Text color="vinho" height={52} size="36" weight={500}>
                Plano Família
                </Text>
                <Text color="vinho" height={30} size="20" weight={500}>
                Integrantes:
                </Text>
            </TitlePlan>

            <SchedulingCardsPlan>
                <SchedulingPlan/>
            </SchedulingCardsPlan>

            <Modal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
                title="Meu perfil"
            >
                <Form>
                    <InputWrapper>
                        <Input label="Nome" onChange={(e) => setName(e)} value={name} />
                        <Input
                            label="Nome social"
                            onChange={(e) => setSocialName(e)}
                            value={socialName}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="Email" onChange={(e) => setEmail(e)} value={email} />
                        <Input
                            label="Senha"
                            onChange={(e) => setPassword(e)}
                            value={password}
                            type="password"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="Idade" onChange={(e) => setAge(e)} value={age} />
                        <Input
                            label="Altura"
                            onChange={(e) => setHeight(e)}
                            value={age}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="Altura" onChange={(e) => setHeight(e)} value={height} />
                        <Input
                            label="Peso"
                            onChange={(e) => setWeight(e)}
                            value={weight}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input label="IMC" onChange={(e) => setImc(e)} value={imc} />
                        <Input
                            label="Sexo"
                            onChange={(e) => setSex(e)}
                            value={sex}
                        />
                    </InputWrapper>
                </Form>
                <ButtonContent>
                    <ButtonWrapper>
                        <Button
                            xs
                            title="Cancelar"
                            variant="secundario"
                            onClick={() => setShowModal(false)}
                        />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button title="Salvar" variant="primario" xs />
                    </ButtonWrapper>
                </ButtonContent>

                <PlanWrapper>
                    <SectionPlan>
                        <InputPlan>
                            <Input label="Plano Contratado" onChange={(e) => setPlan(e)} value={plan} />
                        </InputPlan>
                        <ButtonPlan>
                            <Button title="Adicione um plano" variant="primario" xs onClick={() => { }} />
                        </ButtonPlan>
                    </SectionPlan>

                    <SectionDiet>
                        <QrCode><img src={QRCODE} alt="QR-CODE"></img></QrCode>
                            <Button
                                title="Acesse sua dieta"
                                variant="primario"
                            />
                    </SectionDiet>
                </PlanWrapper>
            </Modal>
        </Container>
    );
};
