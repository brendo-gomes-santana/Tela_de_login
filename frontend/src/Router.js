import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { AuthContext, AuthProvider } from './context/auth';

import './global.scss';

//rotas publicas
import Cadastro from './Pages/PagCadastro/index';
import Login from './Pages/PagLogin/index';
import Home from './Pages/Home/index';

export default function Routers() {

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading){
      return(
        <div>carregando...</div>
      )
    };

    if(!authenticated){
      return <Navigate to='/login'/>
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
              <Route exact path='/cadastro' element={ <Cadastro/> } />
              <Route exact path='/login' element={ <Login/> } />
              <Route exact path='/' element={ <Private> <Home/> </Private> } />
          </Routes>
      </AuthProvider>

    </Router>
  )
}
