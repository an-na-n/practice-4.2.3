import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme, type MantineColorsTuple } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css'
import App from './App.tsx'

const primary: MantineColorsTuple = [
  '#eafbee',
  '#dbf2e0',
  '#b9e1c2',
  '#94d0a1',
  '#74c186',
  '#60b874',
  '#54b46a',
  '#449e59',
  '#398d4d',
  '#2a7a3f'
];

const secondary: MantineColorsTuple = [
  '#e7faeb',
  '#d6f0dc',
  '#3b944e',
  '#bae2c2',
  '#94d2a1',
  '#74c584',
  '#60bc72',
  '#54b868',
  '#44a257',
  '#3b944e',
  '#2b7d3e'
]

const theme = createTheme({
  colors: {
    primary,
    secondary,
  },
  primaryColor: "primary",
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
