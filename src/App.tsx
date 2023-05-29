import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { ProfileUser } from "./pages/profile-user/profile-user";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProfileUser />
    </ThemeProvider>
  );
}

export default App;
