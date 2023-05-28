import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';
import { MarcarConsulta } from './marcarConsulta/marcarConsulta';

function App() {
  return (
    <ThemeProvider theme={theme}><MarcarConsulta /></ThemeProvider>
  );
}

export default App;
