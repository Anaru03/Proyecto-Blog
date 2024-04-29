import useNavigate from "@hooks/useNavigate"

const Nav = () => {
    const { navigate, isLoggedIn } = useNavigate()

    return (
        <nav>
            <a href="#/" onClick={() => navigate('/')}>Home</a> |
            <a href="#/about" onClick={() => navigate('/about')}>Comunidad Potterhead</a> |
            {
                isLoggedIn ? (
                    <a href="#/reporte" onClick={() => navigate('/report')}>Logout</a> |
                    <a href="#/logout" onClick={() => navigate('/logout')}>Logout</a>
                ) : (
                    <a href="#/login" onClick={() => navigate('/login')}>Login</a>
                )
            }
        </nav>
    )
}

export default Nav