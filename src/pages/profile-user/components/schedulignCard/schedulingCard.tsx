import { VideoCamera } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import Button from "../../../../components/button/button";
import { Text } from "../../../../components/text/text";
import { Container, LinkButton, PatientInfo } from "./schedulingCard.styles";

// interface ICardScheduling {
//   date: any;
//   nutricionist: string;
//   slug: string;
// }

interface IPatientInfo {
  data : string;
  nome : string;
}

export const SchedulingCard = ({nome, data}: IPatientInfo) => {
  const theme = useTheme();
  const [hours, setHours] = useState<string>('08:00');
  const [isHover, setIsHover] = useState(false);

  // function encodeData () {
  //   let data = {...date, time: hours};
  //   return funcs.stringToBase64(JSON.stringify(data));
  // }

  return (
    <Container>
      <PatientInfo>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            {data}
            {/* {(date.day<10 ? "0" : "") + date.day} de {funcs.getMonthName(date.month)} de {date.year} */}
          </Text>
        </div>
        <div>
          <Text color="preto" height={26} size="22" weight={500}>
            {nome}
            {/* {nutricionist} */}
          </Text>
        </div>
      </PatientInfo>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <LinkButton href="https://meet.google.com/sdc-bsvq-dzf" target="_blank">
        <Button
          icon={
            <VideoCamera weight="regular" size={24} color={isHover ? theme.Colors.laranja_destaque : theme.Colors.branco} />
          }
          title="Entrar na chamada"
          variant="primario"
          onClick={() => {}}
        />
        </LinkButton>
      </div>
    </Container>
  );
};
