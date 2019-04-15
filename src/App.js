import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React - Redux App | Ariel Duarte(c)2019
          </p>
          <a className="App-link" href="javascript:;" onClick={this.props.aumentar}> [+] Aumentar</a> 
          <a className="App-link" href="javascript:;" onClick={this.props.disminuir}> [-] Disminuir</a>
          <p><strong>Contador: </strong>  {this.props.informacion}</p>
           
          
        </header>
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
    informacion: state.cantidad
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
    disminuir: () => { dispatch( { type: 'DIS'}); }
  }
}

// Connect nos permite acceder al STATE y hacer dispachde ACTIONS y ACTION CREATOR
export default connect(mapStateToProps, mapDispatchToProps)(App);
