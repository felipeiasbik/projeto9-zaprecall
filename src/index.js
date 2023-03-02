import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from "styled-components";
import GlobalStyle from "./components/globalStyles"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
  
);
