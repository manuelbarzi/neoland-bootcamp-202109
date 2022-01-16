import React from "react";
import { Link } from "wouter";
import '../sass/styles.sass'

export default function ListOfGames() {
    return <>
        <nav className='sidebarMenu'>
            <div className='sidebarMenu__item'>✖</div>
            <div className='sidebarMenu__item'><Link to="/profile">😎</Link></div>
            <div className='sidebarMenu__item'><Link to="/settings">🔩</Link></div>
            <div className='sidebarMenu__item'><Link to="/">👋</Link></div>
        </nav>
    </>
}