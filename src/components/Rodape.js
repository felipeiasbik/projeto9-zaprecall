import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Rodape({listaPerguntas, contador, listagem}){
    
    if (listagem.length === 8 && !listagem.map(v => v.icon).includes("close-circle")){
        return (
            <Bottom listagem={listagem} >
            <ResultadoFinal data-test="finish-text"><div><span><img src={party} alt="Venceu"/> Parabéns!</span></div><div>Você não esqueceu de nenhum flashcard!</div></ResultadoFinal>
            <NumConcluidos listagem={listagem} data-test="footer">
                {contador}/{listaPerguntas.length} CONCLUÍDOS
            </NumConcluidos>
            <ListagemBaixa listagem={listagem}>
            {listagem.map(icon => 
                <ListaBottom key={icon.id} corLista={icon.color} data-test={icon.datatest}>
                    <ion-icon name={icon.icon} data-test={icon.datatest}></ion-icon>
                </ListaBottom>
            )}
            </ListagemBaixa>
        </Bottom>
        )
    }else if (listagem.length === 8 && listagem.map(v => v.icon).includes("close-circle")){
        return (
            <Bottom listagem={listagem} >
            <ResultadoFinal data-test="finish-text"><div><span><img src={sad} alt="Perdeu"/> Putz...!</span></div><div>Ainda faltam alguns... Mas não desanime!</div></ResultadoFinal>
            <NumConcluidos listagem={listagem} data-test="footer">
                {contador}/{listaPerguntas.length} CONCLUÍDOS
            </NumConcluidos>
            <ListagemBaixa listagem={listagem}>
            {listagem.map(icon => 
                <ListaBottom key={icon.id} corLista={icon.color} data-test={icon.datatest}>
                    <ion-icon name={icon.icon} data-test={icon.datatest}></ion-icon>
                </ListaBottom>
            )}
            </ListagemBaixa>
        </Bottom>
        )
    } else {
        return(
            <Bottom listagem={listagem}>
                <NumConcluidos listagem={listagem} data-test="footer">
                    {contador}/{listaPerguntas.length} CONCLUÍDOS
                </NumConcluidos>
                <ListagemBaixa listagem={listagem} >
                {listagem.map(icon => 
                    <ListaBottom key={icon.id} corLista={icon.color} data-test={icon.datatest}>
                        <ion-icon name={icon.icon} data-test={icon.datatest}></ion-icon>
                    </ListaBottom>
                )}
                </ListagemBaixa>
            </Bottom>
    )}
}

const Bottom = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05); 
    width: 100%;
    height: ${props => props.listagem.length !== 8 ? 70 : 171}px;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NumConcluidos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 10px 0 0 0;
    color: #333333;
    height: ${props => props.listagem.length !== 0 ? 70 : 45}px;
`
const ListagemBaixa = styled.div`
    display: ${props => props.listagem.length === 0 ? "none" : "flex"};
    margin: 0 0 6px 0;
`

const ListaBottom = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ion-icon{
        font-size: 20pt;
        color: ${props => props.corLista};
    }
`

const ResultadoFinal = styled.div`
    width: 270px;
    height: 87px;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5px;
    div {
        padding-top: 10px;
    }
    span {
        font-weight: 700;
    }
`