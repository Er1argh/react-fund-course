import React, { useContext, useState } from 'react'

import { AuthContext } from '../context'

import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const [loginValue, setLoginValue] = useState('')
  const [passValue, setPassValue] = useState('')

  const login = event => {
    event.preventDefault()
    if (loginValue === 'admin' && passValue === 'admin') {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    } else {
      setLoginValue('')
      setPassValue('')
      alert('Неверный логин или пароль! (login: admin, password: admin)')
    }
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <Input
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
          type="text"
          placeholder="Введите логин"
        />
        <Input
          value={passValue}
          onChange={e => setPassValue(e.target.value)}
          type="password"
          placeholder="Введите пароль"
        />
        <Button>Войти</Button>
      </form>
    </div>
  )
}

export default Login
