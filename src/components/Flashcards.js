import styled from "styled-components";

export default function Flashcards({listaPerguntas, verPergunta}){

    return (
        listaPerguntas.map((p,i) => <Flashcard><h2>Pergunta {i+1}</h2><button onClick={() => verPergunta(p,i, false)}><ion-icon name="play-outline"></ion-icon></button></Flashcard>)      
    );
}

const Flashcard = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    h2 {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    ion-icon {
        font-size: 30px;
        color:#333333;
        cursor: pointer;
    }

    button {
        background-color: transparent;
        border: 0px;
    }
`