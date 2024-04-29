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
        console.log(decodedToken)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <a className="navbar-brand">
                    <img src={LogoEscudo} alt="Logo del Escudo" className="img-fluid" />
                </a>
                        <li className="nav-item">
                            <a className={page == "/" ? "nav-link active" : "nav-link"} onClick={() => navigate('/')}>
                                <i className="fa-solid fa-house-chimney"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={page == "/comunidad" ? "nav-link active" : "nav-link"} onClick={() => navigate('/comunidad')}>
                            <i className="fa-solid fa-user-group"></i> Comunidad
                            </a>
                        </li>
                        {
                            isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <a className={page == "/report" ? "nav-link active" : "nav-link"} onClick={() => navigate('/report')}>
                                            <i className="fa-solid fa-chart-line"></i> Reporte
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={page == "/logout" ? "nav-link active" : "nav-link"} onClick={() => navigate('/logout')}>
                                            <i className="fa-solid fa-right-from-bracket"></i> Salir
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <a className={page == "/login" ? "nav-link active" : "nav-link"} onClick={() => navigate('/login')}>
                                        <i className="fa-solid fa-right-to-bracket"></i> Ingresar
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                    {
                        isLoggedIn ? (
                            <span className="navbar-text">
                                <i className="fa-solid fa-user"></i> {decodedToken.name}
                            </span>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav
