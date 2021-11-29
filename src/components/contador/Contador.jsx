import React from "react";
import Botoes from "./Botoes";

import "./Contador.css";
import Display from "./Display";
import Passo from "./Passo";
export default class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };
  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };
  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };
  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Passo passo={this.state.passo} onPassoChange={this.mudarPasso} />
        <Display valor={this.state.valor} />

        <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
      </div>
    );
  }
}
