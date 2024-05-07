import { useState } from 'react'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import '@styles/Login.css'

import Input from '@components/Input'
import Button from '@components/Button'

function Login() {
    const { setToken } = useToken()
    const { navigate } = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    
    const processLogin = async (event) => {
        event.preventDefault();
        console.log("1")
        try {
            const response = await fetch("http://127.0.0.1:22428/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
    
            if (!response.ok) {
                throw new Error('Usuario inválido, intentalo nuevamente')
            }

    
            const responseData = await response.json(); 
            setToken(responseData.data.token)
            navigate('/dashboard');
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error)
            alert(error.message)
        }
    }

    return (
        <div className='container'>
            <h1>Login</h1>
        

        <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <Input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
        </div>

        <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
        </div>


            <Button text="Ingresar" color="primary" onClick={processLogin} className="button-padding" />
        </div>
    )
}

export default Login
