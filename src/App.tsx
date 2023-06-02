import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { AppRoutes } from "./routes/routes";
import { AuthContextProvider } from "./contexts/authContext/authContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
