import { useState } from 'react'
import CryptoJS from 'crypto-js'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import '@styles/Login.css'

import Input from '@components/Input'
import Button from '@components/Button'

function Login() {
    const { setToken } = useToken()
    const { navigate } = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const processLogin = async () => {
        const response = await fetch("http://127.0.0.1:22428/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: CryptoJS.MD5(password).toString()
            })
        })

        const { access_token } = await response.json()

        if (!response.ok) {
            alert("Usuario inválido, intentalo nuevamente")
            return;
        }

        console.log('token: ', access_token)

        setToken(access_token)
        navigate('/')

        window.location.replace("#/");

        return
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
                    onChange={(value) => setUsername(value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                />
            </div>

            <Button text="Ingresar" color="primary" onClick={processLogin} className="button-padding" />
        </div>
    )
}

export default Login
