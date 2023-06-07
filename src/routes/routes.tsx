import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import { Planos } from "../pages/planos/planos";
import { ProfileUser } from "../pages/profile-user/profile-user";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import SignInUser from "../pages/signInUser/signInUser";
import SignUpUser from "../pages/signUpUser/signUpUser";
import SignUpEsp from "../pages/signUpEsp/signUpEsp";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/sign-up-esp" element={<SignUpEsp />} />
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
