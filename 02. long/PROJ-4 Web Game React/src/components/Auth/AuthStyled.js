import styled from "styled-components"
export const AuthStyled = styled.div`
      width: 400px;
    position: absolute;
        text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px 50px;
    border-radius: 40px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #093034, -13px -13px 20px #22bdcb;


    h2 {
        margin-bottom: 40px;
        color: var(--text-color);
        font-size: 30px;
    }

    input {
        width: 100%;
        font-size: 16px;
        padding: 10px;
        margin-bottom: 20px;
        border: none;
        background: #ecf0f3;
        border-bottom: 1px solid #111;
    }

    .authBtn {
        margin-top: 40px;
        font-style: uppercase;
        color: #fff;
        width: 100%;
        font-size: 16px;
        padding: 10px 0;
        cursor: pointer;
        border: none;
        transform: scale(0.9);
        border-radius: 50px;
        background: linear-gradient(264deg, rgb(43,132,142) 13%, rgb(20,217,235) 57%);
    }
    .authBtn:hover {
        transform: scale(1);
        transition: ease-in 0.2s;
    }
    .login-gg {
        margin-top: 30px;
        align-items: center;
    }
    .login-gg div{
        color: #000;
        margin: 10px 0;
        font-size: 17px;
        align-items: center;

    }

    .or-re {
        margin-top: 30px;
    }
    .or-re div {
        color: #000;
        margin: 10px 0 5px 0;
        font-size: 17px;
    }

    .or-re a {
        color: var(--text-color);
        font-size: 20px;
        line-height: 10px
    }
    .or-re a:hover {
        font-size: 22px;
        transition: ease-in 0.1s;
    }
  
`
