import React from 'react';
import { useState } from 'react'
import './Home.css'
import logger from '../logger'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'
import Favs from './Favs'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useQuery } from '../hooks';

function Home({ hideSpinner, showModal, showSpinner, onSignOut, addVehicleToCart, onProfile }) {
    logger.info("Home -> constructor")

    const queryParams = useQuery()
    const [query, setQuery] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const search = query => {
        setQuery(query)

        navigate(`/search?q=${query}`)
    }

    const goToItem = id => navigate(`/vehicles/${id}`)

    const goToSearch = () => search(query)

    const goToFavorites = () => navigate('/favs')

    return <React.Fragment>
        <Routes>
            <Route path="/" element={<Search
                onSearch={search}
                query={query}
                goToFavorites={goToFavorites}
                showModal={showModal}
                showSpinner={showSpinner}
                hideSpinner={hideSpinner}
                onSignOut={onSignOut}
                onProfile={onProfile}
                onItem={goToItem}
            />}>

                <Route path="search" element={
                    <Results
                        onItem={goToItem}
                        showSpinner={showSpinner}
                        hideSpinner={hideSpinner}
                        showModal={showModal}
                    />
                } />

                <Route path="vehicles/:id" element={
                    <Detail
                        addVehicleToCart={addVehicleToCart}
                        onGoBack={goToSearch}
                        showSpinner={showSpinner}
                        showModal={showModal}
                        hideSpinner={hideSpinner}
                    />
                } />
                <Route path="/favs" element={
                    <Favs
                        onItem={goToItem}
                        onGoBack={goToSearch}
                        hideSpinner={hideSpinner}
                        showSpinner={showSpinner}
                        showModal={showModal}
                    />} />
            </Route>
        </Routes>
    </React.Fragment>
}

export default Home
