import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const useValidaSessao = () => {
    const history = useHistory()
        useEffect( () => {
            const token = window.localStorage.getItem('token')
                if (token === null) {
                    history.push("/login")
                }
        }, [history])
}

/* 
    Criação de um custom Hook que verifica se a sessão em que o usuário está logado ainda é válida.
    Caso não seja, será redirecionado à página de login.
*/