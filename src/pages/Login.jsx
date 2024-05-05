import useForm from '@hooks/useForm'
import Input from '@components/Input'
import useToken from '@hooks/useToken'
import useNavigate from '@hooks/useNavigate'
import Buttons from '@components/Button'
import useApi from '@hooks/useApi';
import { useEffect } from 'react';
import '@styles/Login.css'

function Login() {
    const { setToken } = useToken()
    const { navigate } = useNavigate()
    const {response, execute} = useApi('http://127.0.0.1:22428/login', 'post', null);
    const {values, handleChange, resetForm} = useForm({username: '', password: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
        execute(values);
        resetForm();
    };

    useEffect(() => {
        if (response) {
            console.log(response);
            setToken(response.data.token);
            navigate('/dashboard');
        }
    }, [response]);
    

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='form-login' onSubmit={handleSubmit}>           
                
                <label htmlFor="username">Usuario</label>
                <div className="input-group">
                <Input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Username"
                    label="Username"
                />
                </div>
            
                <label htmlFor="password">Contraseña</label>
                <div className="input-group">
                <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    label="Password"
                />
                </div>


            <Buttons type="submit" text="Ingresar"></Buttons>
            </form>
        </div>
    )
}

export default Login