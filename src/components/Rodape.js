import App from "../App"
import styled from "styled-components"

export default function Rodape({listaPerguntas, contador}){
    return(
        <Bottom data-test="footer">
            {contador}/{listaPerguntas.length} CONCLUÍDOS
        </Bottom>
    )
}

const Bottom = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05); 
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`