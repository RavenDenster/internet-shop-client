import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import Device from './pages/DevicePage'
import urls from './utils/consts'

export const authRoutes = [
    {
        path: '/admin',
        element: Admin
    },
    {
        path: '/basket',
        element: Basket
    },
    {
        path: '/',
        element: Shop
    },
    {
        path: '/login',
        element: Auth
    },
    {
        path:  '/registration',
        element: Auth
    },
    {
        path: urls.REGISTRATION_ROUTE + '/:id',
        element: Device
    },
]

export const publicRoutes = [
    {
        path: urls.SHOP_ROUTE,
        element: Shop
    },
    {
        path: urls.LOGIN_ROUTE,
        element: Auth
    },
    {
        path:  urls.REGISTRATION_ROUTE,
        element: Auth
    },
    {
        path: urls.REGISTRATION_ROUTE + '/:id',
        element: Device
    },
]