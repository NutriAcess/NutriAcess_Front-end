import React from 'react'
import { Container, DivImageSpecialist, DivImageUser, DivModalSignUp, DivX, DivsText, Header, InsideDivSpecialist, InsideDivUser, Question } from './popuplogin.styles'
import { Text } from '../text/text';
import { Stethoscope, X } from '@phosphor-icons/react';
import { User } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}
export interface IPopUpLogin {
  open: boolean;
}

export const PopUpLogin = ({open, onClose}: ModalProps) => {
  const navigate = useNavigate();

  if(!open) return null;
  return (
    <Container open={open}>


      <DivModalSignUp>
        <Header>
          <Question>
            <Text color='preto' height={21} size="24" weight={700}>Como você quer se logar?</Text>
          </Question>
          <DivX>
            <X size={32} color='#000000' onClick={onClose} />
          </DivX>
        </Header>

        <InsideDivUser onClick={() => navigate("/sign-in-user")}>
          <DivImageUser>
            <User size={48} color='#fff' />
            <DivsText>
              <Text color='branco' height={21} size="20" weight={700}>Cliente</Text>
              <Text color='branco' height={21} size="14" weight={500}>Quero passar em consultas com nutricionistas.</Text>
            </DivsText>
          </DivImageUser>
        </InsideDivUser>

        <InsideDivSpecialist onClick={() => navigate("/sign-in-esp")}>
          <DivImageSpecialist>
            <Stethoscope size={48} color='#fff' />
            <DivsText>
              <Text color='branco' height={21} size="20" weight={700}>Nutricionista</Text>
              <Text color='branco' height={21} size="14" weight={500}>Quero atender pacientes de forma online, investir na minha carreira e com horários flexíveis!</Text>
            </DivsText>
          </DivImageSpecialist>
        </InsideDivSpecialist>
      </DivModalSignUp>


    </Container>
  )
}


