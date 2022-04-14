import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#15A4F9',
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App theme={theme} />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

