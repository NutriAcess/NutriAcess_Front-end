import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { ptBR } from "date-fns/locale";
import {
  Container,
  Cover,
  DatePicker,
  DatePickerWrapper,
  Info,
  TextWrapper,
  User,
  UserWrapper,
} from "./nutri-dashboard.styles";
import { mockRanges } from "./mock-ranges";
import Header from "../../components/header/header";
import { Text } from "../../components/text/text";
import Button from "../../components/button/button";

export const NutriDashboard = () => {
  return (
    <Container>
      <Cover>
        <Text color="branco" height={42} size="36" weight={500}>
          Dashboard - olá John
        </Text>
        <UserWrapper>
          <User />
          <Info>
            <TextWrapper>
              <Text color="branco" height={29} size="24" weight={500}>
                Meu perfil
              </Text>
            </TextWrapper>
            <Button title="Visualizar perfil" variant="primario" />
          </Info>
        </UserWrapper>
      </Cover>

      <DatePickerWrapper>
        <DatePicker
          weekdayDisplayFormat="EEEEEE"
          showDateDisplay={false}
          direction="horizontal"
          ranges={mockRanges}
          locale={ptBR}
          months={2}
        />
      </DatePickerWrapper>
    </Container>
  );
};

{
  /* <Header />
<Cover>
  <UserWrapper>
    <User />
  </UserWrapper>
</Cover>
<div>
  <DatePicker
    weekdayDisplayFormat="EEEEEE"
    showDateDisplay={false}
    direction="horizontal"
    ranges={mockRanges}
    locale={ptBR}
    months={2}
  />
</div> */
}
