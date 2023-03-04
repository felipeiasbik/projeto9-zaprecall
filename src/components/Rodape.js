import styled from "styled-components"
import { useState } from "react";

export default function Rodape({listaPerguntas, contador, listagem}){
    
    return(
        <Bottom>
            <NumConcluidos data-test="footer">
                {contador}/{listaPerguntas.length} CONCLUÍDOS
            </NumConcluidos>
            <ListagemBaixa>
            {listagem.map(icon => 
                <ListaBottom key={icon.id} corLista={icon.color} data-test={icon.datatest}>
                    <ion-icon name={icon.icon} ></ion-icon> 
                </ListaBottom>
            )}
            </ListagemBaixa>
        </Bottom>
    )
}

const Bottom = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05); 
    width: 100%;
    height: 70px;
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
    height: ${props => props.listagem !== 0 ? 70 : 0}px;
`
const ListagemBaixa = styled.div`
    display: ${props => props.listagem === 0 ? "none" : "flex"};
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