import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/header.js';


export default function Home() {
  const [dados, setDados] = useState([])

  useEffect(()=>{
    const conv = localStorage.getItem("user")
    setDados(conv)
  }, [])

  return (
      <>
        <Header/>
        <main>
          {dados}
        </main>
      </>
  )
}
