import styled from 'styled-components';

export const ContainerItems = styled.div `
    background: rgb(246,246,246);
    background: linear-gradient(90deg, rgba(246,246,246,0.5158438375350141) 0%, rgba(230,230,237,0.6895133053221288) 50%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;

    ${ props => props.isBlur && `
        backdrop-filter: blur(45px);
        min-height: calc(100vh - 170px);
    `}
`;