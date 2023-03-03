import Card from "./Card";

export default function Flashcards({listaPerguntas, contador, setContador}){

    return (
        listaPerguntas.map((p,i) => <Card key={i} p={p} i={i} contador={contador} setContador={setContador}/>)   
    );
}