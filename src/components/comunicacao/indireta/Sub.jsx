import React from "react";

export default (props) => {
  function acao() {
    props.onClicar(Math.random(), "Gerado");
  }

  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  );
};
//Essa comunicação é do filho para o pai. Ela é chamada de comunicação indireta.
