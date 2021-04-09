import React from 'react';
import ReactDOM from 'react-dom';
import Global from 'styles/Global';
import App from 'components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
