import { VideoCamera } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import Button from "../../../../components/button/button";
import { Text } from "../../../../components/text/text";
import { Container, PatientInfo } from "./schedulingCard.styles";

export const SchedulingCard = () => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <PatientInfo>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Data e hora: 31/10/2024 - 10:34 hrs
          </Text>
        </div>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Paciente: Jonh Doe
          </Text>
        </div>

        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            Descrição: Lorem ipsum...
          </Text>
        </div>
      </PatientInfo>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
      <Button
        icon={
          <VideoCamera color={isHover ? theme.Colors.laranja_destaque : theme.Colors.branco} weight="regular" size={24} />
        }
        title="Entrar na chamada"
        variant="primario"
      />
      </div>
    </Container>
  );
};
