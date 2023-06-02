
import Header from '../../components/header/header';
import { Input } from "../../components/input/input";
import Button from "../../components/button/button";
import { Text } from '../../components/text/text';
import Radio from "./componentes/inputradio"
import Checkbox from './componentes/inputcheack';
import Nutri from "./componentes/nutricionista";
import Pagamento from "./componentes/resumepag";


import React, { useState } from "react";

import {
    Container,
    VerticalBar,
    Textstyle1,
    Inputradio,
    Inputstyle,
    Form,
    Inputstyle1,
    Inputstyle2,
    Textstyle2,
    StyledCheckbox,
    Nutristyle,
    Cont,
    
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
    
  
    const handleCartaoChange = (value: string) => {
      setCartao(value);
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
    
   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
};
    return (
      <Container>
      
      <Header/>
      <Cont>
      <Textstyle1>
        <Text color='preto' size='24' height={50}  weight={600} > Metodo de Pagamento</Text>
      </Textstyle1>
     <Inputradio> 
     <Radio value="option1" name="radioOptions" checked={selectedOption === 'option1'} onChange={handleRadioChange} />
     </Inputradio>
    <Form>
       <Inputstyle><Input label='' onChange={handleNometitularChange} placeholder='Nome do titular do cartão' value={nometitular} type='text'></Input></Inputstyle>
       <Inputstyle><Input label='' onChange={handleNcartaoChange} placeholder='Número do cartão ' value={ncartao} type='number'></Input></Inputstyle>
       <Inputstyle1><Input label='' onChange={handleValidadeChange} placeholder='Validade' value={validade} type='number'></Input></Inputstyle1>
       <Inputstyle2><Input label='' onChange={handleCodsChange} placeholder='Cód. de segurança' value={cods} type='number'></Input></Inputstyle2>
    </Form>

   
      <Textstyle2><Text color='preto' size='20' height={50}  weight={200} > Qual plano você deseja?</Text></Textstyle2>
   < StyledCheckbox>
    <Checkbox name="myCheckbox" checked={isChecked} onChange={handleCheckboxChange } text=' Plano Plus' />
    <Checkbox name="myCheckbox" checked={isChecked1} onChange={handleCheckbox1Change } text=' Plano Premium' />
    <Checkbox name="myCheckbox" checked={isChecked2} onChange={handleCheckbox2Change } text=' Plano Família' />
    </StyledCheckbox>
    </Cont>
    <Nutristyle> <Nutri/> </Nutristyle>
    <VerticalBar/>
    <Pagamento/>
    
        </Container>
    );
  };
  
  export default Formasdepagamento;
