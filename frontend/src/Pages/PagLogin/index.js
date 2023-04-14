import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import './style.scss';

export default function Index() {

    const { Login } = useContext(AuthContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlent = (e) => {
        e.preventDefault()
        Login(email, password)
    };

  return (
    <main className='containerLogin'>
        <section>
            <h2>Login</h2>
            <form className='formLogin' onSubmit={handlent}>
                <div className='field'>
                    <label>E-mail: </label>
                    <input type='email' placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className='field'>
                    <label>Senha: </label>
                    <input type='password' placeholder='Digite sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div id='boxEnvio'>
                    <button type='submit'>Entrar</button>
                    <Link to='/cadastro'>Fazer Cadastro</Link>
                </div>
            </form>
        </section>
    </main>
  )
}
