import Context from "context/UserContext"
import { useCallback, useContext, useState } from "react"
import { authenticateUser, registerUser, toggleFavGame } from "logic"

export default function UseUser() {
    const { token, setToken } = useContext(Context)
    const [spinner, setSpinner] = useState(false)
    const [modal, setModal] = useState(null)
    const [level, setLevel] = useState('')

    const showModal = (message, level = 'error') => {
        setModal(message)
        setLevel(level)
    }

    const acceptModal = () => setModal(false)

    const register = useCallback(async (name, username, password) => {
        try {
            setSpinner(true)
            await registerUser(name, username, password)
            setSpinner(false)
            showModal('Register User Succsessfully')
        } catch ({ message }) {
            showModal(message)
            setSpinner(false)
        }
    }, [])

    const login = useCallback(async (username, password) => {
        try {
            setSpinner(true)
            const token = await authenticateUser(username, password)
            setToken(token)
            sessionStorage.token = token
        } catch ({ message }) {
            showModal(message)
            setSpinner(false)
        }
    }, [setToken])

    const toggleFav = useCallback((id) => {
        toggleFavGame(token, id)
    }, [token])

    const logout = useCallback(() => {
        setToken(null)
        delete sessionStorage.token
    }, [setToken])

    return {
        isLogged: Boolean(token),
        login,
        register,
        logout,
        spinner,
        modal,
        level,
        acceptModal,
        toggleFav
    }
}