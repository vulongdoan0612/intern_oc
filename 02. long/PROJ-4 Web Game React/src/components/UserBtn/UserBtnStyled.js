import styled from "styled-components"

export const UserBtnStyled = styled.div`
    /* text-align: right; */

    position: relative;
    :hover .user-setting{
        display: block;
    }

    .user-name {
    display: flex;
    align-items: center;
    cursor: pointer;
    }
    .user-name span {
        /* display: inline-block; */
        background: #282828;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-right: 15px;
    }
    .user-setting {
        position: absolute;
        bottom: -88px;
        left: 0;
        padding: 10px;
        background: #333333;
        border-radius: 4px;
        display: none;
        width: 150px;
    }
    .user-setting .setting-item {
        font-size: 15px;
        padding: 7px;
        cursor: pointer;
    }
    .user-setting .setting-item  a {
        color: #fff;
    }
    .user-setting .setting-item:hover {
        color: #2c8b94;
    }
    .user-setting .setting-item:hover a {
        color: #2c8b94;
    }
    .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;
        background: url(https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png);
        background-position: center;
        background-size: 40px 40px;
    }
    .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    .balance {
        font-size: 14px;
        margin-top: 5px;
    }
    .balance >div {
        display: inline-block;
        color: red;
        font-weight: bold;
        font-size: 17px;
    }

    
`