import React, {useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Search from "../Home/Forms/Search";
import SearchClient from "../Home/Forms/SearchClient";
import SearchPet from '../Home/Forms/SearchPet';
import Profile from "../Home/Profile";
import ClientPet from "../Home/ClientPet";
import ChangePass from "../Home/Forms/ChangePass";
import ChangeUser from "../Home/Forms/ChangeUser";
import Unregister from "../Home/Forms/Unregister";
import { registerUser, authUser, retrieveUser, unregisterUser, changeUser,changePass} from '../../logic';
import RegisterClientPet from '../Home/Forms/RegisterClientPet';



function App() {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const registerVisual = (name, username, email, password) => {
        registerUser(name, username, email, password, (error, res) => {
            if (error) return alert(error.message)
            else {
                alert(res)
                navigate('/login')
            }
        })
    }
    
    const loginVisual = (username, password) => {
        authUser(username, password, (error, token) => {
            if (error) alert(error.message)
            else {
                alert("Bienvenido a tu home")
                sessionStorage.setItem('token',token)

                retrieveUser(token,(error, user) => {
                    if (error) alert(error.message)
                    else {
                        setUser(user)
                        alert(JSON.stringify(user))
                        navigate('/home')
                    }
                })
            }
        })
    }

    const unregisterVisual = (password) =>{
        unregisterUser(password, sessionStorage.token, (error) =>{
            if (error) alert(error.message)
            else{
                alert('unregister ok')
                delete sessionStorage.token
                navigate('/')
            }
        })
    }

    const changeUserVisual = (user,username,email)=>{
    
        changeUser(user, username, email,sessionStorage.token,(error,res) => {
            if(error) alert(error.message)
            else{
                alert("Tus datos se han cambiado correctamente")
                navigate('/home')
            }
        })
    }


    const changePassVisual = (password,newpassword)=>{

        changePass(password,newpassword,sessionStorage.token,(error,res) => {
            if(error) alert(error.message)
            else{
                alert("Tu contraseña se ha cambiadoo correctamente")
                navigate('/home')
            }
        })
    }


    

    return (<>
        <Routes>
            <Route path="/" element={<Landing />}>
              <Route path="//register" element={<Register registerVisual={registerVisual} />} />
              <Route path="//login" element={<Login loginVisual={loginVisual} />} />
            </Route>
            <Route path="/home" element={<Home />}>
                {/* <Route path="/home/search" element={<Search />} /> */}
                 <Route path="/home/clientPet" element={<ClientPet/>}>
                    <Route path="/home/clientPet/registerClientPet" element={<RegisterClientPet/>} />
                    <Route path="/home/clientPet/search" element={<Search/>}/>
                    <Route path="/home/clientPet/searchClient" element={<SearchClient/>}/>
                    <Route path="/home/clientPet/searchPet" element={<SearchPet/>}/>
                    {/* <Route path="/home/clientPet/resultClient" element={<ResultClient/>}/> */}
                    {/* <Route path="/home/clientPet/file/:clientId" element={<File/>}/> */}
                </Route>  
                <Route path="/home/profile" element={<Profile/>}>
                    <Route path="/home/profile/changepass" element={<ChangePass changePassVisual={changePassVisual} />} />
                    <Route path="/home/profile/changeuser" element={<ChangeUser changeUserVisual={changeUserVisual}/>} />
                    <Route path="/home/profile/unregister" element={<Unregister unregisterVisual={unregisterVisual} />} />
                </Route>
            </Route>
        </Routes>
    </>)
}

export default App