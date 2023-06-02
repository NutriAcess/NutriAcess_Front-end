import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import { Planos } from "../pages/planos/planos";
import { ProfileUser } from "../pages/profile-user/profile-user";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import SignInUser from "../pages/signInUser/signInUser";
import SignUpUser from "../pages/signUpUser/signUpUser";
import SignUpEsp from "../pages/signUpEsp/signUpEsp";
import SobreNos from "../pages/SobreNos/AppSobreNos";
import Fale_conosco from "../pages/fale-conosco/fale_conosco";
import Agendamentos from "../pages/agendamentos/agendamentos";
import { MarcarConsulta } from "../pages/marcarConsulta/marcarConsulta";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/" element={<Home />} />
        <Route path="/profile-user" element={<ProfileUser />} />
        <Route path="/fale-conosco" element={<Fale_conosco />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/sign-up-esp" element={<SignUpEsp />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marcar-consulta" element={<MarcarConsulta />} />
      </Routes>
    </Router>
  );
};
