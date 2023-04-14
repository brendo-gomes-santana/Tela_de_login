import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';

import { RxExit } from 'react-icons/rx';

export default function Index() {
  const { logout } = useContext(AuthContext);


  return (
    <header>
        <h1>Bem vindo</h1>
        <span onClick={()=> {logout()}}><RxExit/></span>
    </header>
  )
}
