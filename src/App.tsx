import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { AppRoutes } from "./routes/routes";
import { AuthContextProvider } from "./contexts/authContext/authContext";
import { FormContextProvider } from "./contexts/formContext/formContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <FormContextProvider>
          <AppRoutes />
        </FormContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
