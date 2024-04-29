import useNavigate from '@hooks/useNavigate'
import useToken from '@hooks/useToken'
import Nav from '@components/Nav'

import Login from '@pages/Login';
import Logout from '@pages/Logout';
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
    '/logout': {
        component: Logout,
        requiresAuth: false
    },
    
    // '/register': {
    //     component: Register,
    //     requiresAuth: false
    // },
}

function Router() {
    const { token } = useToken()
    const { page } = useNavigate()


    let CurrentPage = () => <h1>Error 404: Página no encontrada</h1>

    if (routes[page]) {
        if (routes[page].requiresAuth && !token) {
            CurrentPage = Login
        } else {
            CurrentPage = routes[page].component
        }
    }

    if (page == "/logout") {
        window.location.replace("/");
    }

    return (
        <div>
            <Nav />
            <div className="container mt-3">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <CurrentPage />
                </div>
            </div>
        </div>
    )
}

export default Router