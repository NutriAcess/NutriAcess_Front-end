import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { ptBR } from "date-fns/locale";
import {
  Container,
  Cover,
  DatePicker,
  User,
  UserWrapper,
} from "./nutri-dashboard.styles";
import { mockRanges } from "./mock-ranges";
import Header from "../../components/header/header";

export const NutriDashboard = () => {
  return (
    <Container>
      <Header />
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
      </div>
    </Container>
  );
};
