import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pagamento from "../pages/Pagamento";
import { PaymentPlans } from "../pages/PagamentoPlanos/paymentPlans";
import SobreNos from "../pages/SobreNos/AppSobreNos";
import Agendamentos from "../pages/agendamentos/agendamentos";
import Fale_conosco from "../pages/fale-conosco/fale_conosco";
import { Formulario } from "../pages/formulario/formulario";
import Home from "../pages/home/home";
import { MarcarConsulta } from "../pages/marcarConsulta/marcarConsulta";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import { Planos } from "../pages/planos/planos";
import { ProfileUser } from "../pages/profile-user/profile-user";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import SignInUser from "../pages/signInUser/signInUser";
import SignUpEsp from "../pages/signUpEsp/signUpEsp";
import SignUpUser from "../pages/signUpUser/signUpUser";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagamento-planos" element={<PaymentPlans />} />
        <Route path="/pagamento-nutri" element={<Pagamento />}>
          <Route path=":nutri/:hash" element={<Pagamento />} />
        </Route>
        <Route path="/sign-up-esp" element={<SignUpEsp />} />
        <Route path="/profile-user" element={<ProfileUser />} />
        <Route path="/fale-conosco" element={<Fale_conosco />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marcar-consulta" element={<MarcarConsulta />}>
          <Route path=":nutri" element={<MarcarConsulta />} />
        </Route>
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
};
