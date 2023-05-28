import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';
import Singin from './signInEsp/signInEsp';

function App() {
  return (
    <ThemeProvider theme={theme}><Singin /></ThemeProvider>
  );
}

export default App;
