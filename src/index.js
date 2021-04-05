import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registro_clientes from './Components/Registro_clientes';
import Registro_productos from './Components/Registro_productos';
import Registro_compra from './Components/Registro_compra';
import Solicitud_productos from './Components/Solicitus_productos';
import Entrega_productos from './Components/Entrega_productos';
import Navbar from './Components/navbar';

ReactDOM.render(
  <React.StrictMode>
     <Registro_clientes/>
    {/* <Registro_productos/> 
     <Registro_compra/> 
    <Solicitud_productos/>
    <Entrega_productos/> */}
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
