import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import state from './data/state';
import './css/index.css';
import App from './components/App/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
  
        <App state={state} />
      
     </BrowserRouter>
  </React.StrictMode>
 
);


