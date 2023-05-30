import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { AppRoutes } from "./routes/routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

