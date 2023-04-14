import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';

import { RxExit } from 'react-icons/rx';

import './style.scss';

export default function Index() {
  const { logout } = useContext(AuthContext);


  return (
    <header>
        <h1>Cadastramento</h1>
        <span onClick={()=> {logout()}}><RxExit/></span>
    </header>
  )
}
