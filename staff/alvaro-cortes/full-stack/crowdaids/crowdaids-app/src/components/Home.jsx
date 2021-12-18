import React from 'react';
import { useState, useEffect, useContext } from 'react'
import './Home.sass'
import logger from '../logger'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import { retrieveUser } from '../logic'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useQuery } from '../hooks'
import AppContext from './AppContext'

function Home() {
    logger.info("Home -> constructor")

    const { showSpinner, hideSpinner, showModal, goToHome } = useContext(AppContext)

    const [user, setUser] = useState(null) // user.name
    const [beach, setBeach] = useState({}) // region y nameBeach

    const queryParams = useQuery()
    const [query, setQuery] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(async () => {
        logger.info('Home -> useEffect (componentDidMount)')

        const { token } = sessionStorage

        if (token) {
            try {
                showSpinner()

                const user = await retrieveUser(token)

                hideSpinner()

                const { name } = user

                setUser(name)
            } catch ({ message }) {
                hideSpinner()

                showModal('Error', message)
            }
        }
    }, [])

    const search = (query) => {
        setQuery(query)

        navigate(query ? `/search?q=${query}` : '/')
    }

    const goToItem = (beach, id) => {
        const { name } = beach
        navigate(`/forecast/${name}/${id}`)
        setBeach(beach)
    }

    const goToSearch = () => search(query)

    const goToFavorites = () => navigate('/favs')

    return <>
        <Routes>
            <Route path="/" element={<Search
                user={user}
                onSearch={search}
                query={query}
                onItem={goToItem}
            />}>

                <Route path="search" element={
                    <Results onItem={goToItem} />
                } />

                <Route path="forecast/:name/:id" element={
                    <Detail
                        onGoBack={goToSearch}
                        beach={beach} />
                } />
            </Route>
        </Routes>
    </>
}

export default Home