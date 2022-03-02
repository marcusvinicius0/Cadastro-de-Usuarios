import styled from "styled-components";

import Background from '../../assets/bg1.svg'


export const Container = styled.div `
background: url("${Background}");
background-size: cover; // por padrão a img repete pra ocupar todo espaço
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
    height: 125px;
`;


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background:  rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 50px;
    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: white;
    }

    button {
            background: none;
            border: none;
            cursor: pointer;
    }

`    





