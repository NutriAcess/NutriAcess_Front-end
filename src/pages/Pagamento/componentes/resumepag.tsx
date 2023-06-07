import styled from 'styled-components';
import Button from '../../../components/button/button';
import { Text } from '../../../components/text/text';
import HorizontalBar from "./linha";

const Container = styled.div`
  width: 60%;
  margin-left: 43%;
  margin-top: 100px;
`;


const Styletext = styled.div`
  display: flex;
  margin-top: 20px;
`;


const Styletext1 = styled.div`

`;

const Styletext2 = styled.div`
display: flex;
margin-right: 320px;
`;

const Button1 = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-left: 140px;
  width: 500px;
  margin-top: 55px;
`;

const Hbarstyle = styled.div`
  display: flex;
  margin-right: 310px;
`;

const SectionValuePlan = styled.div`
    display: flex;
    margin-top: 100px ;
    
    justify-content: space-between;
`;


const Nutri = () => {
  return (

    <Container>

      <Styletext>
        <Text color='preto' height={20} size='28' weight={600} > Resumo do pagamento  </Text>
      </Styletext>
      
      <SectionValuePlan>
      <Styletext1>
        <Text color='preto' height={10} size='24' weight={400} > Valor Plano </Text>
      </Styletext1>
      <Styletext2>
        <Text color='preto' height={0} size='24' weight={400} > R$  100,00   </Text>
      </Styletext2>
      </SectionValuePlan>
      <Hbarstyle>
        <HorizontalBar width="1500px" height="1px" color="black" />
      </Hbarstyle>
      <Button1>
        <Button title='Confirmar pagamento' variant='primario' xs /> 
      </Button1>

    </Container>
  );
};

export default Nutri;