import React, { useContext, useState } from 'react'
import { Button, Container, Form,} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import urls from '../utils/consts'
import { useLocation, NavLink, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === urls.LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(urls.SHOP_ROUTE)
    } catch (e) {
      // alert(e.response.data.message)
      console.log(e)
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
            {isLogin ? 
              <div style={{display: 'flex'}}>
                Нет аккаунта? <NavLink to={urls.REGISTRATION_ROUTE}><span style={{marginLeft: '10px'}}>Зарегистрируйтесь!</span></NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={urls.LOGIN_ROUTE}><span style={{marginLeft: '10px'}}>Войдите!</span></NavLink>
              </div>
            }
            <Button
              variant={'outline-success'}
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;