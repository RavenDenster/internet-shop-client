import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import Admin from '../pages/Admin'
import Basket from '../pages/Basket'
import Auth from '../pages/Auth'
import Device from '../pages/DevicePage'
import { Context } from '..'

export const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
  return (
    user.isAuth ? 
        <Routes>
            {/* {authRoutes.map(route =>
                <Route path={route.path} element={<route.element/>} key={path}/>
            )} */}
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/' element={<Shop/>}/>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/registration' element={<Auth/>}/>
            <Route path='/device/:id' element={<Device/>}/>

            <Route path='*' element={<Shop/>}/>
        </Routes>
        :
        <Routes>
            {/* {publicRoutes.map(route =>
                // console.log(route.path)
                <Route path={route.path} element={<route.element/>} key={path}/>
            )} */}
            <Route path='/' element={<Shop/>}/>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/registration' element={<Auth/>}/>
            <Route path='/device/:id' element={<Device/>}/>
            
            <Route path='*' element={<Shop/>}/>
        </Routes>
  )
}
export default AppRouter;