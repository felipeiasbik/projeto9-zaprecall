import Deck from "./components/Deck"
import Rodape from "./components/Rodape";
import listaPerguntas from "./listaPerguntas";
import { useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";

export default function App() {

  const [contador,setContador] = useState(0);
  const [listagem,setListagem] = useState([]);
  const [inicio,setInicio] = useState("flex");

  function comecar(){
    setInicio("none");
  }

  return (
    <>
      <BoasVindas inicio={inicio}>
        <img src={logo} alt="ZapRecall"/>
        <h1>ZapRecall</h1>
        <button onClick={comecar} data-test="start-btn">Iniciar Recall!</button>
      </BoasVindas>
      <Deck 
      listaPerguntas={listaPerguntas} 
      contador={contador}
      setContador={setContador}
      listagem={listagem} 
      setListagem={setListagem}
      />
      <Rodape 
      listaPerguntas={listaPerguntas} 
      contador={contador}
      listagem={listagem}
      />
    </>
  );
}

const BoasVindas = styled.div`
  background-color: #FB6B6B;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: ${props => props.inicio === "flex" ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 136px;
    height: 161px;
  }
  h1 {
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400px;
    color: #ffffff;
  }
  button {
    margin-top: 35px;
    background-color: #ffffff;
    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 246px;
    height: 54px;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400px;
    color: #D70900;
    cursor: pointer;
  }
`