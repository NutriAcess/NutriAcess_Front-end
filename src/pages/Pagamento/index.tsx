import Button from '../../components/button/button';
import Header from '../../components/header/header';


import { ResumePag } from './componentes/resumepag/resumepag';
import { SideLeft } from './componentes/sideLeft/sideLeft';
import Typeplan from './componentes/typeplan/typeplan';
import {
  ButtonConfirm,
  Container,
  Content,
  HeaderPayment,
  SideRight
} from "./pagamento.styles";
import { InfoNutri } from './componentes/infonutri';

const Formasdepagamento = () => {

  return (
    <Container>
      <Header />
      <Content>
        <SideLeft/>
          
        <SideRight>
          <HeaderPayment>
            <InfoNutri />
            <Typeplan/>
          </HeaderPayment>
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
