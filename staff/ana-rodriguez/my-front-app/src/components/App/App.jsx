import React, {useContext} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Search from "../Home/Search";
import Profile from "../Home/Profile";
import ChangePass from "../Home/Forms/ChangePass";
import ChangeUser from "../Home/Forms/ChangeUser";
import Unregister from "../Home/Forms/Unregister";
import { registerUser, authUser, RetieveUser } from '../../logic';
import authContext from '../../context/auth-context';

function App() {

    const{token, setToken} = useContext(authContext)

    const navigate = useNavigate()

    const registerVisual = (name, username, email, password) => { // Esta función deberá mandar al usuario al login y le informe de que el registro ha ido bien o mal
        // Recuperar por parámetros los datos pasados en el onsubmit y
        // Esta función maneja la logica y decide qué hacer con la respuesta de RegisterUser
        registerUser(name, username, email, password, (error, res) => {
            if (error) return alert(error.message)
            else {
                alert(res)
                navigate('/login')
            }
        })
    }

    const authVisual = (username, password) => {

    authUser(username, password, (error, res) => {
            if (error) return alert(error.message)
            else {
                alert("Bienvenido a tu home")
                debugger
                setToken({token: res})
                console.log(token)
                navigate('/home')
            }
        })
    }
    // RetieveUser(token, (error) => {
    //     if (error) return alert(error.message)
    //     else {
    //         alert(token)
    //     }
    // })

    return (<>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register registerVisual={registerVisual} />} />
            <Route path="/login" element={<Login authVisual={authVisual} />} />
            <Route path="/home" element={<Home />}>
                <Route path="/home/search" element={<Search />} />
                <Route path="/home/profile" element={<Profile />}>
                    <Route path="/home/profile/changepass" element={<ChangePass />} />
                    <Route path="/home/profile/changeuser" element={<ChangeUser />} />
                    <Route path="/home/profile/unregister" element={<Unregister />} />
                </Route>
            </Route>
        </Routes>
    </>)
}

export default App