import useNavigate from "@hooks/useNavigate"
import useToken from "@hooks/useToken"
import LogoEscudo from '@assets/escudo.jpg'
import '@styles/Nav.css';

const Nav = () => {
    const { isLoggedIn, getRawToken } = useToken()
    const { page, navigate } = useNavigate()

    let decodedToken = {}

    if (isLoggedIn) {
        decodedToken = getRawToken()
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <a className="navbar-brand">
                            <img src={LogoEscudo} alt="Logo del Escudo" className="img-fluid" />
                        </a>
                        <div className="nav-item">
                            <a className={page == "/" ? "nav-link active" : "nav-link unactive"} onClick={() => navigate('/')}>
                                <i className="fa-solid fa-house-chimney"></i> Home
                            </a>
                        </div>
                        <div className="nav-item">
                            <a className={page == "/comunidad" ? "nav-link active" : "nav-link unactive"} onClick={() => navigate('/comunidad')}>
                            <i className="fa-solid fa-user-group"></i> Comunidad
                            </a>
                        </div>
                        {!isLoggedIn && (
                            <div className="nav-item">
                                <a className={page == "/login" ? "nav-link active" : "nav-link unactive"} onClick={() => navigate('/login')}>
                                    <i className="fa-solid fa-right-to-bracket"></i> Ingresar
                                </a>
                            </div>
                        )}
                        {isLoggedIn && (
                            <>
                                <div className="nav-item">
                                    <a className={page == "/creatP" ? "nav-link active" : "nav-link unactive"} onClick={() => navigate('/report')}>
                                        <i className="fa-solid fa-chart-line"></i> Reporte
                                    </a>
                                </div>
                                <div className="nav-item">
                                    <a className={page == "/logout" ? "nav-link active" : "nav-link unactive"} onClick={() => navigate('/logout')}>
                                        <i className="fa-solid fa-right-from-bracket"></i> Salir
                                    </a>
                                </div>                                    
                            </>
                        )}                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
