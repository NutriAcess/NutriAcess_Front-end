import styled from 'styled-components';
import Button from '../../../components/button/button';
import { Text } from '../../../components/text/text';
import HorizontalBar from "./linha";

const Container = styled.div`
  width: 60%;
  margin-left: 43%;
`;


const Styletext = styled.div`
  display: flex;
`;


const Styletext1 = styled.span`
`;

const Styletext2 = styled.span`

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
  margin-right: 15%;
`;

const SectionValuePlan = styled.div`
    display: flex;
    padding: 20px 0px;
    justify-content: space-between;
`;


const Nutri = () => {
  return (

    <Container>

      <Styletext>
        <Text color='preto' height={20} size='28' weight={600} > Resumo do pagamento  </Text>
      </Styletext>
      <Hbarstyle>
        <HorizontalBar width="1500px" height="1px" color="black" />
      </Hbarstyle>
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