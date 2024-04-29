import useNavigate from '@hooks/useNavigate'
import Nav from '@components/Nav'

import Login from '@pages/Login';
import Home from '@pages/Homepage';
import Comunidad from '@pages/Comunidad';
import Dashboard from '@pages/Dashboard';
import Reporte from '@pages/Reporte';

const routes = {
    '/': {
        component: Home,
        requiresAuth: false
    },
    '/comunidad': {
        component: Comunidad,
        requiresAuth: false
    },
    '/dashboard': {
        component: Dashboard,
        requiresAuth: true
    },
    '/report': {
        component: Reporte,
        requiresAuth: true
    },
    '/login': {
        component: Login,
        requiresAuth: false
    },
}

function Router() {
    const { page, navigate } = useNavigate()


    let CurrentPage = () => <h1>Error 404: Página no encontrada</h1>

    if (routes[page]) {
        CurrentPage = routes[page].component
    }

    return (
        <div>
            <Nav />
            <CurrentPage />
        </div>
    )
}

export default Router