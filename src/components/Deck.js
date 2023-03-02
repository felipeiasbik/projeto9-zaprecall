import styled from "styled-components";
import Topo from "./Topo";
import Flashcards from "./Flashcards";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";
import { useState } from "react";

export default function Deck({listaPerguntas}){
    const [mostrar,setMostrar] = useState("Flashcard");

    function verPergunta(p,i){
        setMostrar("Pergunta");
    }

    function verResposta(p){
        setMostrar("Resposta");
    }

    function exibeDeck(){
        if (mostrar === "Flashcard"){
            return <Flashcards listaPerguntas={listaPerguntas} verPergunta={verPergunta}/>
        } else if (mostrar === "Pergunta"){
            return <Pergunta listaPerguntas={listaPerguntas} verResposta={verResposta} />
        } else if (mostrar === "Resposta"){
            return <Resposta listaPerguntas={listaPerguntas} />
        } else {
            return <Flashcards listaPerguntas={listaPerguntas} verPergunta={verPergunta}/>
        }
    }

    return (
        <Corpo>
            <AppProjeto>
                <Topo />
                <Container>
                    {exibeDeck()}
                </Container>
            </AppProjeto>
        </Corpo>
    );
}

const Corpo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: top;
`

const AppProjeto = styled.div`
    width: 375px;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`