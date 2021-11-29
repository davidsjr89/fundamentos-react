import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0));

  function gerarNumerosNaoContido(array) {
    const min = 1;
    const max = 60;
    const novoNumero = parseInt(Math.random() * (max - min)) + min;

    return array.includes(novoNumero)
      ? gerarNumerosNaoContido(array)
      : novoNumero;
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtdeNumero)
      .fill(0)
      .reduce((a, e) => {
          return [...a, gerarNumerosNaoContido(a)]
      }, [])
      .sort((a, b) => a -b)
      setNumeros(novoArray)
   
  }
  return (
    <>
      <h3>Gerador de números da mega-sena</h3>
      <h4>{numeros.join(" ")}</h4>
      <button type="button" onClick={gerarNumeros}>
        Clique
      </button>
    </>
  );
};
