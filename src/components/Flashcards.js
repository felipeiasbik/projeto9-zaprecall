import Card from "./Card";

export default function Flashcards({listaPerguntas}){

    return (
        listaPerguntas.map((p,i) => <Card key={i} p={p} i={i}/>)   
    );
}