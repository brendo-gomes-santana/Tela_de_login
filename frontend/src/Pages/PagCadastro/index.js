import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//style
import './style.scss';

// api
import { CadastrodeUsuario } from '../../Api/config';

//import de img
import img from '../../img/teladecadastro.png';

export default function Index() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');
    const [data, setData ] = useState('');
    const [password, setPassword] = useState('');


    const handlesubmit = async(e) => {
        e.preventDefault()

        await CadastrodeUsuario(name, email, contato, data , password)
        alert('usuário cadastrado com sucesso')
        navigate('/login')

    }

    return (
        <main className='conteinerPagCadastro'>
            <section>
                <figure>
                    <img src={img} alt='Tela de cadastro'/>
                </figure>
                <form id='formCadastro' onSubmit={handlesubmit}>
                    <h1>Cadastro de usuário</h1>
                    <div className='field'>
                        <label>Nome: </label>
                        <input type='text' placeholder='Digite seu nome completo' value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>

                    <div className='field'>
                        <label>E-mail: </label>
                        <input type='email' placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>

                    <div className='field'>
                        <label>Contato: </label>
                        <input type='text' placeholder='Número de contato' value={contato} onChange={(e)=> setContato(e.target.value)}/>
                    </div>

                    <div className='field'>
                        <label>Data de Nascimento: </label>
                        <input type='date' id='date' value={data} onChange={(e)=> setData(e.target.value)}/>
                    </div>

                    <div className='field'>
                        <label>Senha: </label>
                        <input type='password' placeholder='Digite sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div id='boxEnvio'>
                        <Link to='/login'>Volta ao Login</Link>
                        <button type='submit'>Cadastrar</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
