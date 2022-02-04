import React, { useState } from "react"
import Search from "./Search"
import { searchChampions, unregisterUser, updateUserPassword } from '../logic/index'
import Results from "./Results"
import Detail from "./Detail"
import { useQueryParams } from '../hooks'
import Profile from "./Profile"
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom'

function Home( { onSignOut } ) {


    const [view, setView] = useState( "search" )
    const queryParams = useQueryParams()
    const navigate = useNavigate()
    const goToSearch = () => search( query )
    const [query, setQuery] = useState( queryParams.get( 'name' ) )


    const search = query => {
        setQuery( query )

        navigate( `/search/?name=${query}` )
    }

    const goToProfile = () => navigate( '/profile' )

    const location = useLocation()


    return <div className="container container--gapped container--vertical">
            <div className="container ">
                <button className={`button button-medium ${location.pathname === '/profile' && 'button--dark'}`} onClick={goToProfile}>Profile</button>
                <button className="button button-medium button" onClick={onSignOut}>Sign out</button>
            </div>

            <Routes>
                <Route path="/" element={<Search onSearch={search} query={query} />}>
                    <Route path="search" element={
                        <Results />
                    } />
                    <Route path="champion" element={
                        <Detail onBack={goToSearch} />
                    } />
                </Route>

                <Route path="/profile" element={<Profile onBack={goToSearch} onSignOut={onSignOut} />} />
            </Routes>
        </div>
}

export default Home
