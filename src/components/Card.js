import styled from "styled-components";
import { useState } from "react";
import flip from "../assets/flip.svg"

export default function Card({p, i, contador, setContador}){

    const [selecionado,setSelecionado] = useState(0);
    const [cor,setCor] = useState("#333333");

    function girar(){
        setSelecionado(selecionado + 1);
        setCor("#333333");
    }

    function errou(){
        setSelecionado(3);
        setCor("#FF3030");
        setContador(contador+1);
    }

    function meio(){
        setSelecionado(4);
        setCor("#FF922E");
        setContador(contador+1);
    }

    function acertou(){
        setSelecionado(5);
        setCor("#2FBE34");
        setContador(contador+1);
    }

    if ( selecionado === 0 ){
        return <Flashcard selecionado={selecionado} cor={cor} data-test="flashcard"><h2 data-test="flashcard-text">Pergunta {i+1}</h2><button onClick={() => girar()} data-test="play-btn"><ion-icon name="play-outline"></ion-icon></button></Flashcard>
    } else if ( selecionado === 1 ){
        return <Perguntas data-test="flashcard"><h2 data-test="flashcard-text">{p.question}</h2><button onClick={() => girar()}><img src={flip} alt="Ver resposta" data-test="turn-btn"/></button></Perguntas>
    } else if ( selecionado === 2 ) {
        return <Respostas data-test="flashcard"><h2 data-test="flashcard-text">{p.answer}</h2><Botoes><button onClick={() => errou()}><Vermelho>Não lembrei</Vermelho></button><button onClick={() => meio()}><Laranja>Quase não lembrei</Laranja></button><button onClick={() => acertou()}><Verde>Zap!</Verde></button></Botoes></Respostas>
    } else if ( selecionado === 3 ) {
        return <Flashcard selecionado={selecionado} cor={cor} data-test="flashcard"><h2 data-test="flashcard-text">Pergunta {i+1}</h2><button><ion-icon name="close-circle"></ion-icon></button></Flashcard>
    } else if ( selecionado === 4 ) {
        return <Flashcard selecionado={selecionado} cor={cor} data-test="flashcard"><h2 data-test="flashcard-text">Pergunta {i+1}</h2><button><ion-icon name="help-circle"></ion-icon></button></Flashcard>
    } else {
        return <Flashcard selecionado={selecionado} cor={cor} data-test="flashcard"><h2 data-test="flashcard-text">Pergunta {i+1}</h2><button><ion-icon name="checkmark-circle"></ion-icon></button></Flashcard>
    }
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
        text-decoration: ${props => props.selecionado < 3 ? "none" : "line-through"};
        line-height: 19px;
        color: ${props => props.cor};
    }
    ion-icon {
        font-size: 30px;
        color:${props => props.cor};
        cursor: pointer;
    }

    button {
        background-color: transparent;
        border: 0px;
    }
`

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

const Respostas = styled.div`
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
`

const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;
    background-color: transparent;
    border: 0px;
    gap:7px;
    margin-top: 20px;
    button {
        padding: 0px;
        background-color: transparent;
        border: 0px;
        cursor: pointer;
    }
`
const Vermelho = styled.div`
    background-color: #FF3030;
    width: 85px;
    height: 37px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`

const Laranja = styled.div`
    background-color: #FF922E;
    width: 85px;
    height: 37px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`

const Verde = styled.div`
    background-color: #2FBE34;
    width: 85px;
    height: 37px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
`