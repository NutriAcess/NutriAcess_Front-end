import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SobreNos from "../SobreNos/AppSobreNos";
import Agendamentos from "../agendamentos/agendamentos";
import Fale_conosco from "../fale-conosco/fale_conosco";
import { MarcarConsulta } from "../marcarConsulta/marcarConsulta";
import Home from "../pages/home/home";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import { Planos } from "../pages/planos/planos";
import { ProfileUser } from "../pages/profile-user/profile-user";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import SignInUser from "../pages/signInUser/signInUser";
import SignUpUser from "../pages/signUpUser/signUpUser";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-user" element={<ProfileUser/>} />
        <Route path="/fale-conosco" element={<Fale_conosco />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />}/>
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marcar-consulta" element={<MarcarConsulta />} />
      </Routes>
    </Router>
  );
};
