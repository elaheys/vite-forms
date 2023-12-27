import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
//mui
import { ThemeProvider } from '@mui/material';
import theme from './MUItheme/theme.js';
//styles
import './styles/fonts.css'
import './global.css'

                

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
