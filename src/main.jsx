import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, createStandaloneToast } from '@chakra-ui/react';

import App from './components/App';

import './styles/index.css';

const colors = {
  primary: {
    50: '#EDFDFD',
    100: '#C4F1F9',
    200: '#9DECF9',
    300: '#76E4F7',
    400: '#0BC5EA',
    500: '#00B5D8',
    600: '#00A3C4',
    700: '#0987A0',
    800: '#086F83',
    900: '#065666'
  }
};

const breakpoints = {
  sm: '10em',
  md: '30em',
  lg: '40em',
  xl: '50em',
  '2xl': '55em'
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

const { ToastContainer } = createStandaloneToast(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
