import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import urls from '../utils/consts'
import {Button} from 'react-bootstrap'
import { Context } from '..';
import {observer} from 'mobx-react-lite'
import { useNavigate } from "react-router-dom";

const Navbari = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
            <Navbar.Brand style={{color: 'while'}} href={urls.SHOP_ROUTE}>КупиДевайс</Navbar.Brand>
            {user.isAuth ? 
                <Nav className="me-auto" style={{color: 'while'}} >
                    <Button variant={'outline-light'}  onClick={() => navigate(urls.ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant={'outline-light'} onClick={() => logOut()} style={{marginLeft: 10}}>Выйти</Button>
                </Nav>
                :
                <Nav className="me-auto" style={{color: 'while'}} >
                    <Button variant={'outline-light'} onClick={() => navigate(urls.LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
      </Container>
    </Navbar>
  </>
  )
})

export default Navbari