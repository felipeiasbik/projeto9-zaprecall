import styled from "styled-components";

export default function Resposta({listaPerguntas}){
    return (
        listaPerguntas.map((p) => <Respostas><h2>{p.answer}</h2><Botoes><Vermelho>Não lembrei</Vermelho><Laranja>Quase não lembrei</Laranja><Verde>Zap!</Verde></Botoes></Respostas>)      
    );
}

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