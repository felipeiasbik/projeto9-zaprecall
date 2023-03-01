import styled from "styled-components";
import logo from "../assets/logo.png";
import listaPerguntas from "../listaPerguntas";

export default function Flashcards(){
    return (
        <Body>
            <AppProjeto>
                <Header>
                    <img src={logo} alt="Logo do Zap Recall"/>
                    <h1>ZapRecall</h1>
                </Header>
                <Container>
                    {listaPerguntas.map((p,i) => <Pergunta><h2>Pergunta {i+1}</h2><ion-icon name="play-outline"></ion-icon></Pergunta>)}
                </Container>
                <Bottom>
                    0/8 CONCLUÍDOS
                </Bottom>
            </AppProjeto>
        </Body>
    );
}

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: top;
`

const AppProjeto = styled.div`
    width: 100%;
    background-color: #FB6B6B;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`

const Header = styled.div`
    width: 255px;
    height: 144px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 52px;
        height: 60px;
    }
    h1 {
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-weight: 400px;
        color: #ffffff;
        margin-right: 22px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`

const Pergunta = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 65px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
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
    }
`

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