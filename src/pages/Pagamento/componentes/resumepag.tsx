import React from 'react';
import styled from 'styled-components';
import HorizontalBar from "./linha";
import { Text } from '../../../components/text/text';
import Button from '../../../components/button/button';





const Container = styled.div`
  width: 60%;
  margin-left: 43%;



`;


const Styletext = styled.div`
  display: flex;
  margin-top: -30%;
 
 
 
   
   
`;


const Styletext1 = styled.span`
  display: flex;
  margin-top: 5%;
 
  
   
   
`;



const Styletext2 = styled.span`
  display: flex;
  
  margin-left: 70%;
 
   
   
`;

const Button1 = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 17%;
  width: 50%;
  margin-top: 34px;
  
 
`;

const Hbarstyle = styled.div`
  display: flex;
  margin-top: 3%;
  margin-right: 15%;
 
   
   
`;

const Nutri = () => {
    return (

        <Container>

            <Styletext><Text color='preto' height={20} size='28' weight={600} > Resumo do pagamento  </Text></Styletext>
            <Styletext1><Text color='preto' height={10} size='24' weight={300} > Valor do plano   </Text></Styletext1>
            <Styletext2><Text color='preto' height={0} size='24' weight={300} > R$  100,00   </Text></Styletext2>
            <Hbarstyle><HorizontalBar width="1500px" height="1px" color="black" /></Hbarstyle>
            <Styletext1><Text color='preto' height={10} size='24' weight={600} > Total  </Text></Styletext1>
            <Styletext2><Text color='preto' height={0} size='24' weight={600} > R$  100,00   </Text></Styletext2>
            <Hbarstyle><HorizontalBar width="1500px" height="1px" color="black" /></Hbarstyle>
            < Button1><Button title='Confirmar pagamento' variant='primario' xs /> </Button1>

        </Container>






    );
};

export default Nutri;