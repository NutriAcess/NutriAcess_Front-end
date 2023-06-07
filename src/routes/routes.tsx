import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pagamento from "../pages/Pagamento/pagamento";
import { PaymentPlans } from "../pages/PagamentoPlanos/paymentPlans";
import Home from "../pages/home/home";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
import SignInSpecialist from "../pages/signInEsp/signInEsp";
import SignInUser from "../pages/signInUser/signInUser";
import SignUpEsp from "../pages/signUpEsp/signUpEsp";
import SignUpUser from "../pages/signUpUser/signUpUser";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/pagamento-planos" element={<PaymentPlans />} />
        <Route path="/pagamento-nutri" element={<Pagamento />} />
        <Route path="/sign-up-esp" element={<SignUpEsp />} />
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
      </Routes>
    </Router>
  );
};
