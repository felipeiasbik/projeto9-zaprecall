import styled from "styled-components";
import Topo from "./Topo";
import Flashcards from "./Flashcards";

export default function Deck({listaPerguntas, contador, setContador, listagem, setListagem}){

    return (
        <Corpo>
            <AppProjeto>
            <Topo />
                <Container listagem={listagem}>
                    <Flashcards
                    listaPerguntas={listaPerguntas}
                    contador={contador}
                    setContador={setContador}
                    listagem={listagem} 
                    setListagem={setListagem}
                    />
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
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${props => props.listagem.length === 8 ? 171 : 70}px;
`