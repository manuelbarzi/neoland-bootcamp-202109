import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Search from "../Home/Forms/Search/Search";
import SearchPets from '../Home/Forms/Search/SearchPets';
import Profile from "../Home/Profile";
import ClientPet from "../Home/ClientPet";
import ChangePass from "../Home/Forms/ChangePass";
import Unregister from "../Home/Forms/Unregister";
import { registerUser, authUser, retrieveUser, unregisterUser, changePass } from '../../logic';
import RegisterClientPet from '../Home/Forms/RegisterClientPet';
import File from '../Home/Forms/File/File';


function App() {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const registerVisual = async (name, username, email, password) => {
        try {

            const res = await registerUser(name, username, email, password)
            alert('registrado correctamente')
            navigate('/login')

        }
        catch (err) {
            alert(err.message)
        }
    }

    const loginVisual = async ( username, password ) => {

        try {
            const token = await authUser(username, password)
            alert("Bienvenido a tu home")
            sessionStorage.setItem('token', token)
            try {
                const userResponse = await retrieveUser(token)
                setUser(userResponse)
                navigate('/home')
            }
            catch (err) {
                alert(err.message)
            }
        }
        catch (err) {
            alert(err.message)
        }
    }

    const unregisterVisual = async (password) => {

        try {
            const res = unregisterUser(sessionStorage.token,password)
            alert('unregister ok')
            delete sessionStorage.token
            navigate('/')

        }
        catch (err) {
            alert(err.message)

        }
    }

    const changePassVisual = async (password, newpassword) => {

        try {
            const res = changePass(sessionStorage.token,password, newpassword)
            alert("Tu contraseña se ha cambiado correctamente")
            navigate('/home')
        }
        catch (err) {
            alert(err.message)
        }
    }

    return (<>
        <Routes>
            <Route path="/" element={<Landing />}>
                <Route path="//register" element={<Register registerVisual={registerVisual} />} />
                <Route path="//login" element={<Login loginVisual={loginVisual} />} />
            </Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home/clientPet" element={<ClientPet />}>
                    <Route path="/home/clientPet/registerClientPet" element={<RegisterClientPet />} />
                    <Route path="/home/clientPet/search" element={<Search />} />
                    <Route path="/home/clientPet/file/:clientId" element={<File/>}/>
                </Route>
                <Route path="/home/profile" element={<Profile />}>
                    <Route path="/home/profile/changepass" element={<ChangePass changePassVisual={changePassVisual} />} />
                    <Route path="/home/profile/unregister" element={<Unregister unregisterVisual={unregisterVisual} />} />
                </Route>
            </Route>
        </Routes>
    </>)
}

export default App