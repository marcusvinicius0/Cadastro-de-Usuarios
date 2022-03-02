import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';

ReactDOM.render(
  <>
  <Routes /> 
  <GlobalStyle />
  </>,
  document.getElementById('root')  //SÓ POSSO RENDERIZAR 1 COMPONENTE. se quiser mais, preciso por em um elemento pai.
);



