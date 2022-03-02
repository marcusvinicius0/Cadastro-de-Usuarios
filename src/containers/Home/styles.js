import styled from "styled-components";

import Background from '../../assets/bg.svg'


export const Container = styled.div `
background: url("${Background}");
background-size: cover; // por padrão a img repete pra ocupar todo espaço
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
`;

export const Image = styled.img `
    margin-top: 30px;
    height: 125px;
`;

export const InputLabel = styled.p `
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: white;
    margin-left: 25px;
`;

export const Input = styled.input `
    background:  rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 50px;
    margin-bottom: 34px;
    border: none;
    outline: none;
    padding-left: 30px;
    
`;



