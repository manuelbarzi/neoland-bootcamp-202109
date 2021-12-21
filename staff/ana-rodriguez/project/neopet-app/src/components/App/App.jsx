import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Search from "../Home/Forms/Search/Search";
import Profile from "../Home/Profile";
import ClientPet from "../Home/ClientPet";
import ChangePass from "../Home/Forms/ChangePass";
import Unregister from "../Home/Forms/Unregister";
import { registerUser, authUser, retrieveUser, unregisterUser, changePass } from '../../logic';
import RegisterClientPet from '../Home/Forms/RegisterClientPet';
import File from '../Home/Forms/File/File';
import RegisterNewPet from '../Home/Forms/RegisterNewPet';
import Spinner from '../Spinner';


function App() {

    const [user, setUser] = useState(null)

    const [spinnerState, setSpinner] = useState(false)

    const navigate = useNavigate()

    const toogleSpinner = (state) => {
        setSpinner(state);
    }

    const registerVisual = async (name, username, email, password) => {
        try {

            toogleSpinner(true)
            const res = await registerUser(name, username, email, password)
            alert('registrado correctamente')
            toogleSpinner(false)
            navigate('/login')
        }
        catch (err) {
            alert(err.message)
            toogleSpinner(false)
        }
    }

    const loginVisual = async (username, password) => {

        try {
            toogleSpinner(true)

            const token = await authUser(username, password)
            alert("Bienvenido")
            sessionStorage.setItem('token', token)
            try {
                const userResponse = await retrieveUser(token)
                setUser(userResponse)
                toogleSpinner(false)
                navigate('/home')
            }
            catch (err) {
                alert(err.message)
                toogleSpinner(false)
            }
        }
        catch (err) {
            alert(err.message)
            toogleSpinner(false)
        }
    }

    const unregisterVisual = async (password) => {

        try {
            toogleSpinner(true)

            const res = unregisterUser(sessionStorage.token, password)
            alert('unregister ok')
            delete sessionStorage.token
            toogleSpinner(false)
            navigate('/')

        }
        catch (err) {
            alert(err.message)
            toogleSpinner(false)

        }
    }

    const changePassVisual = async (password, newpassword) => {

        try {
            toogleSpinner(true)

            const res = await changePass(sessionStorage.token, password, newpassword)
            alert("Tu contraseña se ha cambiado correctamente")
            toogleSpinner(false)
            navigate('/login')
        } catch (err) {
            alert(err.message)
            toogleSpinner(false)
        }
    }

    return (<>
        <Spinner state={spinnerState} />
        <Routes>
            <Route path="/" element={<Landing />}>
                <Route path="//register" element={<Register registerVisual={registerVisual} />} />
                <Route path="//login" element={<Login loginVisual={loginVisual} />} />
            </Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home/clientPet" element={<ClientPet />}>
                    <Route path="/home/clientPet/registerClientPet" element={<RegisterClientPet toogleSpinner={toogleSpinner} />} />
                    <Route path="/home/clientPet/search" element={<Search toogleSpinner={toogleSpinner}/>} />
                    <Route path="/home/clientPet/file/:clientId" element={<File toogleSpinner={toogleSpinner}/>} />
                    <Route path="/home/clientPet/registerNewPet/:clientId" element={<RegisterNewPet toogleSpinner={toogleSpinner} />} />
                </Route>
                <Route path="/home/profile" element={<Profile />}>
                    <Route path="/home/profile/changepass" element={<ChangePass changePassVisual={changePassVisual}/>} />
                    <Route path="/home/profile/unregister" element={<Unregister unregisterVisual={unregisterVisual}/>} />
                </Route>
            </Route>
        </Routes>
    </>)
}

export default App