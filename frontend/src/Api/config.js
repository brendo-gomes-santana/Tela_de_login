import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export const CadastrodeUsuario = async (name, email, contato, data_de_nascimento, password) => {
    return api.post('/cadastrar', {
        name, 
        email, 
        contato,
        data_de_nascimento,
        password,
    })
};

export const session = async(email, password) => {
    return api.post('/session', {
        email,
        password,
    })
}

export const inforUsuario = async () => {
    return api.get('/user')
}