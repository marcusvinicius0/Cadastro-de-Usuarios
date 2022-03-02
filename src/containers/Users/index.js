import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trashcan from '../../assets/trashcan.svg';

import H1 from '../../components/Title'
import ContainerItems from '../../components/ContainerItems';
import Button from '../../components/Button'

import { Container, Image, User } from './styles'


function Users() {
  const [users, setUsers] = useState([]); // ESTADO // ESTADO EM REACT É IMUTÁVEL. PRECISO ADICIONAR UMA INFORMAÇÃO INTEIRA, NÃO PODEMOS SAIR MUDANDO.
  const history = useHistory()

  useEffect(() => {            //função, parenterese esperando parametros, função anonima e array//
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, []) // é chamado em 2 ocasiões: 1.quando a aplicação inicia/2.quando um estado que está no array
  //de dependência é alterado 

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push('/')
  }

  return (

    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trashcan} alt="trashcan" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
       <img alt='arrow' src={Arrow} />  Voltar 
        </Button>

      </ContainerItems>
    </Container>
  )
}

export default Users


