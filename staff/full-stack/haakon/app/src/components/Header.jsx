import '../sass/styles.sass'
import { useState } from "react";
import { Link, useLocation } from "wouter"

import useUser from 'hooks/useUser'

export default function Header() {
    const [query, setQuery] = useState('')

    const [, navigate] = useLocation()

    const { isLogged, logout } = useUser()

    const handleSubmit = evt => {
        evt.preventDefault()
        navigate(`/search/${query}`)
    }

    const handleChange = evt => {
        setQuery(evt.target.value)
    }

    return (
        <header className='header'>
            <Link to='/'>HAAKON</Link>
            <form className='header__search' onSubmit={handleSubmit}>
                <input className="input-elevated" placeholder="Search Here" type="text" value={query} onChange={handleChange} />
            </form>
            {
                isLogged
                    ? <button onClick={logout}>Logout</button>
                    : <><Link to={'/login'}>Login</Link> <Link to={'/register'}>Register</Link></>
            }

            {/* <div className="hamburguerMenu" onClick={() => setView('sidebar')}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            {view === 'sidebar' && <SideBarMenu />} */}
        </header>
    )
}