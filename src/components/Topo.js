import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Topo(){
    return (
        <Header>
            <img src={logo} alt="Logo do Zap Recall"/>
            <h1>ZapRecall</h1>
        </Header>
    )
}

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