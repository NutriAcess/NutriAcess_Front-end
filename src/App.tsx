import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';
import Agendamentos from './agendamentos/agendamentos';

function App() {
  return (
    <ThemeProvider theme={theme}><Agendamentos /></ThemeProvider>
  );
}

export default App;
