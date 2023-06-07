import Header from '../../components/header/header';
import { Input } from "../../components/input/input";
import { Text } from '../../components/text/text';
import Checkbox from './componentes/inputcheack';
import Nutri from "./componentes/nutricionista";
import Pagamento from "./componentes/resumepag";
import Radiotext from "./componentes/inputradio"

import React, { useState } from "react";

import {
  Container,
  Content,
  Form,
  Inputradio,
  Inputstyle,
  Inputstyle1,
  Inputstyle2,
  Nutristyle,
  SectionChekbox,
  StyledCheckbox,
  Textstyle1,
  Textstyle2,
  VerticalBar,
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

  const [selectedOption, setSelectedOption] = useState('');
  const [cartao, setCartao] = useState("");
  const [nometitular, setNometitular] = useState("");
  const [ncartao, setNcartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cods, setCods] = useState("");


  const handleSelectedOptionChange = (value: string) => {
    setSelectedOption(value);
  };

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
        <Textstyle1>
          <Text color='preto' size='24' height={50} weight={600}>Método de Pagamento</Text>
        </Textstyle1>
        <Inputradio>
       
         <Radiotext>  
         <Text color='preto' size='20' height={200} weight={600}>Cartão de Crédito</Text>
         </Radiotext>
        
        </Inputradio>
        <Form>
          <Inputstyle>
            <Input label='' onChange={handleNometitularChange} placeholder='Nome do titular do cartão' value={nometitular} type='text'></Input>
          </Inputstyle>
          <Inputstyle>
            <Input label='' onChange={handleNcartaoChange} placeholder='Número do cartão ' value={ncartao} type='number'></Input>
          </Inputstyle>
          <Inputstyle1>
            <Input label='' onChange={handleValidadeChange} placeholder='Validade' value={validade} type='number'></Input>
          </Inputstyle1>
          <Inputstyle2>
            <Input label='' onChange={handleCodsChange} placeholder='Cód. de segurança' value={cods} type='number'></Input>
          </Inputstyle2>
        </Form>

        <SectionChekbox>
          <Textstyle2>
            <Text color='preto' size='20' height={50} weight={200}>Qual plano você deseja?</Text>
          </Textstyle2>
          <StyledCheckbox>
            <Checkbox name="myCheckbox" checked={isChecked} onChange={handleCheckboxChange} text=' Plano Plus' />
            <Checkbox name="myCheckbox" checked={isChecked1} onChange={handleCheckbox1Change} text=' Plano Premium' />
            <Checkbox name="myCheckbox" checked={isChecked2} onChange={handleCheckbox2Change} text=' Plano Família' />
          </StyledCheckbox>
        </SectionChekbox>
       

      </Content>
      <VerticalBar />
    <Nutristyle>
      <Nutri/>
    </Nutristyle>
    <Pagamento/>
      
      
    
    </Container>
  );
};

export default Formasdepagamento;
