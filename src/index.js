import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'

// Crear el STATE inicial, cuando implementamos el combineReducers
// ya no es necesario esto, sino que lo definimos en cada reducer
// const state = {  cantidad: 2 };

// Crear la funcion REDUCER para el contador
const reducerContador = (state = 2, action) => {
    // Hacemos la copia del State anterior
    var nuevoEstado = Object.assign({}, state);
    if (action.type === 'AUM') {
        nuevoEstado = state + 1;
        return nuevoEstado;
    }

    if (action.type === 'DIS') {
        nuevoEstado = state - 1;
        return nuevoEstado;
    }

  return state;
};

// Crear la funcion REDUCER para el TODO
const reducerTodo = (state = [], action) => {
    var nuevoEstado = Object.assign({}, state);
    if (action.type === 'ADD') {
        nuevoEstado = state.concat([{tarea: action.tarea, id: action.id}]);
        console.log('====================================');
        console.log(JSON.stringify(nuevoEstado));
        console.log('====================================');
        return nuevoEstado;
    }
  return state;
};


// Crear la funcion REDUCER para el ID
const reducerId = (state = 1, action) => {
    var nuevoEstado = Object.assign({}, state);
    if (action.type === 'ADD') {
        nuevoEstado = state +1;
        return nuevoEstado;
    }
  return state;
};


// Creamos nuestro combineReducer para implementar todo nuestros REDUCERS
// El combineReducer toma un objeto JS con los demas reducers como valores
// Con el combineReducer necesitamos que cada estado sea inicializado en su reducer
const reducer = combineReducers({
    contador: reducerContador,
    todos: reducerTodo,
    id: reducerId
});

// Crear el STORE
// Se inyecta el applyMiddleware en el createStore y tambien implementamos Redux Thunk
const store = createStore(reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  // Implementar el PROVIDER para englobar todos los componentes al Store osea tienen acceso al STORE, dispachar acciones,
  // y tiene acceso al STATE
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
