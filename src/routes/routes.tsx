import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import SignInUser from "../pages/signInUser/signInUser";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import SignUpUser from "../pages/signUpUser/signUpUser";
import SobreNos from "../SobreNos/AppSobreNos";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
      </Routes>
    </Router>
  );
};
