import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css';
import Login from "../Login/Login";
import { authUser, retrieveUser} from '../../logic';
import Spinner from '../Spinner';
import File from '../File/File';


function App() {

    const [user, setUser] = useState(null)
    const [spinnerState, setSpinner] = useState(false)

    const navigate = useNavigate()

    const loginVisual = async ( username, password ) => {

        try {
            toogleSpinner(true)
            const token = await authUser(username, password)
            sessionStorage.setItem('token', token)
            try {
                const userResponse = await retrieveUser(token)
                setUser(userResponse)
                toogleSpinner()
                navigate('/home/'+userResponse.clientId)
            }
            catch (err) {
                alert(err.message)
                toogleSpinner(false)
                navigate('/')
            }
        }
        catch (err) {
            alert(err.message)
            toogleSpinner(false)
        }
    }

    const toogleSpinner = (state) => {
        setSpinner(state);
    }

    return (<>
        <Spinner state={spinnerState}/>
        <Routes>
            <Route path="/" element={<Login loginVisual={loginVisual}/>}/>
            <Route path="/home/:clientId" element={<File toogleSpinner={toogleSpinner}/>}/>
        </Routes>
    </>)
}

export default App