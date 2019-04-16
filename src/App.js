import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {

// Creamos una funcion fuera del scope de Redux para llamar a la action this.props.agregar
agregarTarea = (evento) => {
  if(evento.which === 13) {
    console.log('event: ', evento.target.value);
    this.props.agregar(evento.target.value, this.props.id)
  }
   
}

  render() {

  // Creamos un mecanimo para mostrar la lista de tareas
  const elementosTareas = this.props.tareas.map( (t) => {
      return <h4 key={t.id}> {t.tarea} </h4>
  })

    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4> React - Redux Apps | 2019 &copy;Ariel Duarte </h4>
        </header>
        <div className="App-intro">
        <p>
            Contador Redux App
          </p>
          <a className="App-link" href="javascript:;" onClick={this.props.aumentar}> [+] Aumentar</a> 
          <a className="App-link" href="javascript:;" onClick={this.props.disminuir}> [-] Disminuir</a>
          <p><strong>Contador: </strong>  {this.props.informacion}</p>
          <br />
          <p>
            TODO Redux App
          </p>
          <input onKeyPress={this.agregarTarea.bind(this)} placeholder="Ingrese la nueva tarea" />
          <br />
          {elementosTareas}
        </div>
      </div>
    );
  }
}

// Ingresa como props a nuestro Component tanto el STATE como los DISPATCH
//  {this.props.informacion}

// MapStateToProps no es nada mas que una funcion, internamente hace una Subscripción y un Get State
// por lo que constantemente en caso de un cambio en el STATE se actualiza o se ejecuta nuevamente.
const mapStateToProps = (state) => {
  return {
    // informacion: state.cantidad
    informacion: state.contador,
    tareas: state.todos,
    id: state.id
  }
}
// MapDispatchToProps[as a OBJECTO] puede ser un objeto o una funcion, esto tiene funciones que se asume que son actionCreators
// y al inyectar a nuestro componente las engloba en dispatch para que de esta forma puedan ser llamadas DISPATCH
// const mapDispatchToProps = {
//  aumentar: ()=> { return {type: 'AUM'} },
//  disminuir: ()=> { return { type: 'DIS'} }
// }

// MapDispatchToProps[as a FUCNTION]
const mapDispatchToProps = (dispatch) => {

  return {
    aumentar: ()=> { dispatch( { type: 'AUM'} ); },
    disminuir: () => { dispatch( { type: 'DIS'}); },
    agregar: (tarea, id)=> { dispatch( {type: 'ADD', tarea, id}); }
  }
}

// Connect nos permite acceder al STATE y hacer dispachde ACTIONS y ACTION CREATOR
export default connect(mapStateToProps, mapDispatchToProps)(App);
