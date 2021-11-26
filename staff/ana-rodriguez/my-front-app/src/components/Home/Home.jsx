import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';

function Home() {

    return <>
        
            <div className="title">
                <h1>Home</h1>
                {/* <h2 className="home__subtitle">Hello {user.name}!!!</h2> */}
            </div>
            <nav className="nav__buttons">
                <Link to="/home/profile"><button className='button' type="button">Profile</button></Link>
                <Link to="/home/search"><button className='button' type="button">Search</button></Link>
                <Link to="../login"><button className='button' type="button">Log out</button></Link>
            </nav>
            <div>
                <Outlet />
            </div>
    
    </>
}


export default Home
