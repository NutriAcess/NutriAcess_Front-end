import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import Header from '../../components/header/header';


import { InfoNutri } from './componentes/infonutri';
import { ResumePag } from './componentes/resumepag/resumepag';
import { SideLeft } from './componentes/sideLeft/sideLeft';
import {
  ButtonConfirm,
  Container,
  Content,
  HeaderPayment,
  SideRight
} from "./pagamento.styles";


const Formasdepagamento = () => {
  const navigate = useNavigate();

  
  function handleButton() {
    alert("Consulta confirmada com sucesso. Te desejamos uma boa consulta!")
    navigate("/")
  }
  
  return (
    <Container>
      <Header />
      <Content>
        <SideLeft/>
          
        <SideRight>
          <HeaderPayment>
            <InfoNutri />
          </HeaderPayment>
          <ResumePag/>
          <ButtonConfirm>
            <Button title='Confirmar pagamento' variant='primario' xs onClick={() => handleButton()}/>
          </ButtonConfirm>
        </SideRight>
      </Content>
    </Container>
  );
};

export default Formasdepagamento;
