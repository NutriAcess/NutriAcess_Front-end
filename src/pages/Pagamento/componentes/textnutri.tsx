import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../components/text/text';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1020px;
  margin-top: -130px;

`;

const Style = styled.div`
  display: flex;
  margin-top: 15px;

`;

const Stylefamily = styled.div`
  display: flex;
  
  margin-left: 425px;
  margin-top: -150px;

`;

const Stylefamily1 = styled.div`
  display: flex;
  
  margin-left: 460px;
  margin-top: 45px;
 
  background-color:#FCB823;
  height: 45px;
  width: 105px;
  border-radius: 10px;

`;


const Stylespan = styled.span`
  display: flex;
 

`;




const Nutri = () => {
    return (

<Container>
     
      <Text color='preto'  height={20} size='28'  weight={600} > Camila Gabriela  </Text>
      <Style> <Text color='preto'  height={20} size='20'  weight={550} > Nutricionista esportiva  </Text> </Style>
     
     
      <Style> <Text color='preto'  height={20} size='16'  weight={550} > Data: Sex., 25 de Agosto às 13:00h </Text> </Style>
      <Style> <Text color='preto'  height={20} size='16'  weight={550} > Fuso horário: São Paulo </Text> </Style>
      <Style> <Text color='preto'  height={20} size='16'  weight={550} > Duração: 40 minutos  </Text> </Style>
      <Stylefamily> <Text color='preto'  height={20} size='28'  weight={600} > Plano Família  </Text> </Stylefamily>
     <Stylefamily1> <Text color='preto'  height={40} size='22'  weight={600} > R$ 100,00   </Text> </Stylefamily1>
</Container>






    );
  };
  
  export default Nutri;