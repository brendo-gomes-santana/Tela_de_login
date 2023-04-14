import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/header.js';

import  { inforUsuario } from '../../Api/config.js';

import './style.scss';
export default function Index() {

  const [dados, setDados] = useState([]);

  useEffect(()=>{
    ( async ()=> {
      const response = await inforUsuario();
      console.log(response)
      setDados(response.data);
    } )();
  }, [])

  return (
    <>
      <Header/>
      <main className='containerHome'>
          {Array(dados).map((item) => (
            <section key={item.id}>
              <h1>{item.name}</h1>
              <p>E-mail: {item.email}</p>
              <p>Contato: {item.contato}</p>
            </section>
          ))}
        </main>
    </>

  )
}
