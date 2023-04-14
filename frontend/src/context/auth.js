import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api, session } from '../Api/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);

    useEffect(()=> {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false);
    }, [])

    const Login = async (email, password) => {
        const response = await session(email, password)

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(loggedUser);
        navigate('/');

        return
    };

    const logout = () => {
        localStorage.removeItem("user");
        api.defaults.headers.Authorization = null
        setUser(null);
        navigate('/login')
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, Login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}