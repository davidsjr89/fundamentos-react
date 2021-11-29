import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComFilhos from "./components/basico/ComFilhos";
import ComParametro from "./components/basico/ComParametro";
import Card from "./components/layout/Card";
import Repeticao from "./components/basico/Repeticao";
import Condicional from "./components/basico/Condicional";
import CondicionalIf from "./components/basico/CondicionalIf";

import "./App.css";
import "./index.css";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/Mega/Mega";
export default (props) => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="cards">
      <Card titulo="Mega" color="#73503C">
        <Mega qtdeNumero={5}/>
      </Card>

      <Card titulo="Contador" color="#293E6A">
        <Contador passo={10} valor={1000}></Contador>
      </Card>

      <Card titulo="Input" color="#9C0F5F">
        <Input></Input>
      </Card>

      <Card titulo="Comunicação indireta" color="#000">
        <Super></Super>
      </Card>

      <Card titulo="Comunicação direta" color="#4298B5">
        <Pai sobrenome="Junior"></Pai>
      </Card>

      <Card titulo="Componente Condicional com IF separado" color="#FA6900">
        <CondicionalIf numero={9}></CondicionalIf>
      </Card>

      <Card titulo="Componente Condicional" color="#E64C6F">
        <Condicional numero={10}></Condicional>
      </Card>

      <Card titulo="Componente repetição" color="#008BBA">
        <Repeticao></Repeticao>
      </Card>

      <Card titulo="Componente com Filhos" color="#D96459">
        <ComFilhos titulo="Os filhos">
          <ul>
            <li>David</li>
            <li>Jho</li>
            <li>Deb</li>
            <li>Ca</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="Com Parametro" color="#FF88AA">
        <ComParametro titulo="Titulo" subtitulo="Subtitulo"></ComParametro>
      </Card>

      <Card titulo="Primeiro Componente" color="#92B06A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
