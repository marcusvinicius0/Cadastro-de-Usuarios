import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../components/Title' 
import ContainerItems from '../../components/ContainerItems';
import Button from '../../components/Button'

import { Container, Image, InputLabel, Input } from './styles'

function App() {
  const [users, setUsers] = useState([]); // ESTADO // ESTADO EM REACT É IMUTÁVEL. PRECISO ADICIONAR UMA INFORMAÇÃO INTEIRA, NÃO PODEMOS SAIR MUDANDO.
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {  
      name: inputName.current.value,
      age: inputAge.current.value,    
    });  

    setUsers([...users, newUser]); 

    history.push('/usuarios');
  }

 
  return (

    <Container>
      <Image alt="logo-imagem" src={People} />

      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="text" placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="text" placeholder='Idade' ></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt='arrow' src={Arrow} /></Button>

       
      </ContainerItems>
    </Container>
  )
}

export default App


