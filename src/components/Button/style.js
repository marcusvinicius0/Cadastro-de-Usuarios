import styled from 'styled-components';


export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 342px;
    height: 65px;
    background:  ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${ props => props.isBack ? '1px solid #ffffff' : 'none'};
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: white;
    cursor: pointer;
    margin-top: 60px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: ${props => props.isBack && 'rotateY(180deg)'}
    }
`;


