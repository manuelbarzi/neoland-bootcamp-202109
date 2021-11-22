import { Routes, Route} from 'react-router-dom'
import './App.css'
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
// import { BrowserRouter as Router } from 'react-router-dom'
import Search from "../Home/Search";
import Profile from "../Home/Profile";
import ChangePass from "../Home/Forms/ChangePass";
import ChangeUser from "../Home/Forms/ChangeUser";
import Unregister from "../Home/Forms/Unregister";

function App() {

    return (<>
    
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}>
                <Route path="/home/search" element={<Search/>}/>
                <Route path="/home/profile" element={<Profile/>}>
                    <Route path="/home/profile/changepass" element={<ChangePass/>}/>
                    <Route path="/home/profile/changeuser" element={<ChangeUser/>}/>
                    <Route path="/home/profile/unregister" element={<Unregister/>}/>
                </Route>
            </Route>
       </Routes>
    </>)
}

export default App