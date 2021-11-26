import Index from '../views/home/index'
import Data from '../views/data/index'
import About from '../views/about/index'

import Login from '../views/login/index'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/data',
        component: Data
    },
    {
        path: '/about',
        component: About
    }
]

export default routes