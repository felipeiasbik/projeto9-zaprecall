import styled from "styled-components";
import flip from "../assets/flip.svg"
export default function Pergunta({listaPerguntas, verResposta}){
    return (
        listaPerguntas.map((p) => <Perguntas><h2>{p.question}</h2><button onClick={() => verResposta(p)}><img src={flip} alt="Ver resposta"/></button></Perguntas>)      
    );
}

const Perguntas = styled.div`
    background-color: #FFFFD4;
    width: 300px;
    min-height: 131px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
    h2 {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #333333;
    }
    img {
        cursor: pointer;
    }

    button {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        background-color: transparent;
        border: 0px;
    }
`