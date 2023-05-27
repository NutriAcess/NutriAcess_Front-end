import React from 'react';
import Fale_conosco from './fale-conosco/fale_conosco';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>< Fale_conosco /></ThemeProvider>
 
    );
}

export default App;

