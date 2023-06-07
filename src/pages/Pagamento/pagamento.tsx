import Header from '../../components/header/header';
import { Input } from "../../components/input/input";
import { Text } from '../../components/text/text';
import Checkbox from './componentes/inputcheack';

import React, { useState } from "react";

import Button from '../../components/button/button';
import { InfoNutri } from './componentes/infonutri/infonutri';
import { ResumePag } from './componentes/resumepag/resumepag';
import {
  ButtonConfirm,
  Container,
  Content,
  ContentInput,
  Inputstyle,
  SectionChekbox,
  SideLeft,
  SideRight,
  StyledCheckbox
} from "./pagamento.styles";

const Formasdepagamento = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleCheckbox1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked1(e.target.checked);
  };

  const handleCheckbox2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked2(e.target.checked);
  };

  const [nometitular, setNometitular] = useState("");
  const [ncartao, setNcartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cods, setCods] = useState("");

  const handleNometitularChange = (value: string) => {
    setNometitular(value);
  };

  const handleNcartaoChange = (value: string) => {
    setNcartao(value);
  };

  const handleValidadeChange = (value: string) => {
    setValidade(value);
  };

  const handleCodsChange = (value: string) => {
    setCods(value);
  };

  return (
    <Container>
      <Header />
      <Content>
        <SideLeft>
          <Text color='preto' size='24' height={50} weight={600}>Método de Pagamento</Text>

          <Text color='preto' size='20' height={31} weight={600}>Cartão de Crédito</Text>

          <Inputstyle>
            <Input label='' onChange={handleNometitularChange} placeholder='Nome do titular do cartão' value={nometitular} type='text'></Input>
          </Inputstyle>
          <Inputstyle>
            <Input label='' onChange={handleNcartaoChange} placeholder='Número do cartão ' value={ncartao} ></Input>
          </Inputstyle>

          <ContentInput>
            <Inputstyle>
              <Input label='' onChange={handleValidadeChange} placeholder='Validade' value={validade} />
            </Inputstyle>
            <Inputstyle>
              <Input label='' onChange={handleCodsChange} placeholder='Cód. de segurança' value={cods} />
            </Inputstyle>
          </ContentInput>


          <SectionChekbox>
            <Text color='preto' size='20' height={50} weight={200}>Qual plano você deseja?</Text>
            <StyledCheckbox>
              <Checkbox name="myCheckbox" checked={isChecked} onChange={handleCheckboxChange} text=' Plano Plus' />
              <Checkbox name="myCheckbox" checked={isChecked1} onChange={handleCheckbox1Change} text=' Plano Premium' />
              <Checkbox name="myCheckbox" checked={isChecked2} onChange={handleCheckbox2Change} text=' Plano Família' />
            </StyledCheckbox>
          </SectionChekbox>
        </SideLeft>

        <SideRight>
          <InfoNutri />
          <ResumePag/>
          <ButtonConfirm>
            <Button title='Confirmar pagamento' variant='primario' xs />
          </ButtonConfirm>
        </SideRight>
      </Content>
    </Container>
  );
};

export default Formasdepagamento;
