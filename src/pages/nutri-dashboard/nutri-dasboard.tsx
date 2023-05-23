import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { ptBR } from "date-fns/locale";
import {
  Container,
  Cover,
  DatePicker,
  Scheduling,
  Info,
  TextWrapper,
  User,
  UserDetails,
  UserWrapper,
  DatePickerWrapper,
} from "./nutri-dashboard.styles";
import { mockRanges } from "./mock-ranges";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import Button from "../../components/button/button";

export const NutriDashboard = () => {
  return (
    <Container>
      <Header />
      <Cover>
        <UserDetails>
          <Text color="branco" height={42} size="36" weight={500}>
            Dashboard - olá John
          </Text>
          <UserWrapper>
            <User
              src="https://github.com/Luisjunior119.png"
              alt="Foto do usuário"
            />
            <Info>
              <TextWrapper>
                <Text color="branco" height={29} size="24" weight={500}>
                  Meu perfil
                </Text>
              </TextWrapper>
              <Button title="Visualizar perfil" variant="terciario" />
            </Info>
          </UserWrapper>
        </UserDetails>
      </Cover>

      <Scheduling>
        <DatePickerWrapper>
          <Text color="branco" height={26} size="22" weight={500}>
            Agendamentos
          </Text>
          <DatePicker
            weekdayDisplayFormat="EEEEEE"
            showDateDisplay={false}
            direction="horizontal"
            ranges={mockRanges}
            onChange={() => {}}
            locale={ptBR}
            months={2}
          />
        </DatePickerWrapper>
      </Scheduling>
    </Container>
  );
};
