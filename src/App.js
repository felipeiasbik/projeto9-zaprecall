import Deck from "./components/Deck"
import Rodape from "./components/Rodape";
import listaPerguntas from "./listaPerguntas";

export default function App() {
  return (
    <>
      <Deck listaPerguntas={listaPerguntas}/>
      <Rodape listaPerguntas={listaPerguntas}/>    
    </>
  );
}
