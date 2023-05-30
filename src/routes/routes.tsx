import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Fale_conosco from "../fale-conosco/fale_conosco";
import SignInUser from "../pages/signInUser/signInUser";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import SignUpUser from "../pages/signUpUser/signUpUser";
import SobreNos from "../SobreNos/AppSobreNos";
import Agendamentos from "../agendamentos/agendamentos";


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fale-conosco" element={<Fale_conosco />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />}/>
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
      </Routes>
    </Router>
  );
};
