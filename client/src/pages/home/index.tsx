import { useEffect, useState, useRef } from 'react';
import './style.css'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef<HTMLInputElement>(null)
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    try {
      if (inputName.current != null || inputEmail.current != null || inputPassword != null) {
        await api.post('/usuarios', {
          user_name: inputName.current?.value,
          user_email: inputEmail.current?.value,
          user_password: inputPassword.current?.value
        })
      }
    } catch (error) { console.log(error) }
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='container'>
      <form>
        <h1>Cadstro de usuario</h1>
        <input name='nome' type='text' ref={inputName}></input>
        <input name='idade' type='number' ref={inputAge}></input>
        <input name='email' type='email' ref={inputEmail}></input>
        <button type='button'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Home

