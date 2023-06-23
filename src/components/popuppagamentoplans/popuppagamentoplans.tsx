import { X } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import logopagamento from "../../assets/LogoPagamento.png";
import pagamentoconcluido from "../../assets/pagamentoconcluido.png";
import { Text } from '../text/text';
import { Container, DivModalSignUp, DivText, DivX, Header, Pagamento, Question } from './popuppagamentplans.styles';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}
export interface IPopUpPagamentoPlans {
    open: boolean;
}

export const PopUpPagamentoPlans = ({ open, onClose }: ModalProps) => {
    const navigate = useNavigate();

    if (!open) return null;
    return (

        <Container open={open}>
            <DivModalSignUp>
                    <Header>
                        <Question>
                            <img src={logopagamento}></img>
                        </Question>
                        <DivX onClick={() => navigate("/agendamentos")}>
                            <X size={32} color="white"></X>
                        </DivX>
                    </Header>
                    <Pagamento>
                        <img src={pagamentoconcluido}></img>
                    </Pagamento>
                    <DivText>
                        <Text color='branco' height={21} size="18" weight={700}>Pagamento confirmado com sucesso.</Text>
                        <Text color='branco' height={21} size="16" weight={700}>Faça a escolha do seu nutricionista!</Text>
                    </DivText>
        </DivModalSignUp>
    </Container >
  )
}
