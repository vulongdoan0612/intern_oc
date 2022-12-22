import styled from "styled-components"

export const StyledUploadSong= styled.div`
    
    .inputs {
        margin-bottom: 40px;
    }

    .inputs .label {
        font-size: 14px;
        margin-bottom: 5px;
    }
    .inputs .write input {
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }

    .inputs .write {
        display: flex;
        flex-wrap: wrap;
    }
    .inputs .write >div{
        width: 50%;
        padding-right: 30px;
        margin-bottom: 20px;
    }

    .inputs .choose {
        margin-bottom: 50px;
    }
    .inputs .choose >div {
        margin-bottom: 20px;
    }
    .inputs .choose input {
        font-size: 20px;
        cursor: pointer;
    }
    .uploadBtn {
        font-size: 20px;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }
    .uploadBtn:hover {
        background: red;
        transition: ease 0.2s;
        color: #fff;
    }

`
