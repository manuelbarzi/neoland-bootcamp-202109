import React, { useState } from "react";
import '../sass/styles.sass'
import { Link, useLocation } from "wouter"
import useGames from 'hooks/useGames'

export default function Header() {
    const [query, setQuery] = useState('')
    const [path, setPath] = useLocation()
    const { loading, games } = useGames()

    const handleSubmit = evt => {
        evt.preventDefault()
        setPath(`/search/${query}`)
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
            <div className='header__avatar'><img src="https://img.icons8.com/color/48/000000/avatar.png" /></div>
            <div className='header__menu'><img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo.png" /></div>
        </header>
    )
}