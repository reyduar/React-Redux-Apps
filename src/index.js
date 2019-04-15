import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Crear el STATE inicial
const state = {
    cantidad: 2
  };

// Crear la funcion REDUCER
const reducer = (state, action) => {
    // Hacemos la copia del State anterior
    var nuevoEstado = Object.assign({}, state);
    if (action.type === 'AUM') {
        nuevoEstado.cantidad = state.cantidad + 1;
        return nuevoEstado;
    }

    if (action.type === 'DIS') {
        nuevoEstado.cantidad = state.cantidad - 1;
        return nuevoEstado;
    }

  return state;
};

// Crear el STORE
const store = createStore(reducer, state);

ReactDOM.render(
  // Implementar el PROVIDER para englobar todos los componentes al Store osea tienen acceso al STORE, dispachar acciones,
  // y tiene acceso al STATE
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
