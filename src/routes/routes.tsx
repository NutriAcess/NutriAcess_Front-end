import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import SignInUser from "../pages/signInUser/signInUser";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import SignUpUser from "../pages/signUpUser/signUpUser";
import SignUpEsp from "../pages/signUpEsp/signUpEsp";
import Pagamento from "../pages/Pagamento/pagamento"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sign-up-esp" element={<SignUpEsp />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
      </Routes>
    </Router>
  );
};
