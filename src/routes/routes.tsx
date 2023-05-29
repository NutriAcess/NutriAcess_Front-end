import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import { NutriDashboard } from "../pages/nutri-dashboard/nutri-dasboard";
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
        <Route path="/sign-in-user" element={<SignInUser />} />
        <Route path="/sign-in-esp" element={<SignInSpecialist />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/dashboard-nutri" element={<NutriDashboard />} />
      </Routes>
    </Router>
  );
};
