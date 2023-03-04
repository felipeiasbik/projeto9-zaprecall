import Card from "./Card";

export default function Flashcards({listaPerguntas, contador, setContador, listagem, setListagem}){

    return (
        listaPerguntas.map((p,i) => 
        <Card 
        key={i} 
        p={p} 
        i={i} 
        contador={contador} 
        setContador={setContador} 
        listagem={listagem} 
        setListagem={setListagem}
        />)   
    );
}