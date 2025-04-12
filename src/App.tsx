import React from 'react';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { light } from './utils/ThemeProps';
import Home from './pages/home';
import Header from './common/Header';
import Footer from './common/Footer';

// If you have any custom theme, you can type it properly like this
// import { Theme } from '@mui/material/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={responsiveFontSizes(light)}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
