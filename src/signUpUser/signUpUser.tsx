import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import Logo from "../../components/logo/logo";
import Text from "../../components/text/text";




 const Texto1 = styled.div`
position: absolute;
left: 40%;
top: 15%;
color: #741944;


`;



const Texto2 = styled.div`
position: absolute;
left: 41%;
top: 110%;
color: #741944;



`;


const Container = styled.div`
margin-top:25px;



`;


const Config = styled.div`
label{
  position:relative;
right: 18%;

}


`;


  
const Singin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState ('')
    const [nome, setNome] = useState('')
    const [nomesocial, setNomesocial] = useState('')
    const [crn, setCrn] = useState('')


    const handleEmailChange = (value: string) => {
      setEmail(value);
    };


    const handleSenhaChange = (value: string) => {
        setSenha(value);
      };
  

      const handleNomeChange = (value: string) => {
        setNome(value);
      };

      const handleNomesocialChange = (value: string) => {
        setNomesocial(value);
      };


      const handleCrnChange = (value: string) => {
        setCrn(value);
      };


    return (
      <Container>
        <Logo></Logo>
        
        <Texto1> <Text fontSize={30} fontWeight={600}> Cadastro Especialista </Text></Texto1>
        
        <Input label="Nome:" value={nome} placeholder="Nome" type="text"   onChange={handleNomeChange} />
      <Config> <Input label="Nome Social" value={nomesocial} placeholder="Nome social" type="text"   onChange={ handleNomesocialChange} /></Config>
        <Input  label="E-mail:" value={email} placeholder=" e-mail" type="email"  onChange={handleEmailChange} />
        <Input label="Senha:" value={senha} placeholder=" senha" type="password"   onChange={handleSenhaChange} />
        <Input label="CRN:" value={crn} placeholder="0000000-0" type="number"   onChange={handleCrnChange} />
      
       <Texto2> <Text fontSize={15}> Não tem cadastro? Faça agora mesmo! </Text> </Texto2>
      </Container>
    );
  };
  
  export default Singin;