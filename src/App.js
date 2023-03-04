import Deck from "./components/Deck"
import Rodape from "./components/Rodape";
import listaPerguntas from "./listaPerguntas";
import { useState } from "react";

export default function App() {

  const [contador,setContador] = useState(0);
  const [listagem,setListagem] = useState([]);

  return (
    <>
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
