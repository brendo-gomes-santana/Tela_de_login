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
        const token = localStorage.getItem("token")

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, [])

    const Login = async (email, password) => {
        const response = await session(email, password)

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(loggedUser);
        navigate('/');

    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token")
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