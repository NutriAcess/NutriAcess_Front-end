import { Check } from "phosphor-react";
import Button from "../../../../components/button/button";
import { Text } from "../../../../components/text/text";
import { Container, PatientInfo } from "./schedulingCardCompleted.styles";

interface IPatientInfo {
  data : string;
  nome : string;
}

export const SchedulingCardCompleted = ({data, nome} : IPatientInfo) => {

  return (
    <Container>
      <PatientInfo>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          {data}
          </Text>
        </div>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
          {nome}
          </Text>
        </div>
      </PatientInfo>

        <Button
          icon={
            <Check weight="regular" size={24} color="#FFF" />
          }
          title="Consulta realizada"
          variant="quartenario"
        />
    </Container>
);
};
