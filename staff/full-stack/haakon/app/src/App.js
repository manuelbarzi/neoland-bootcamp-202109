import React from 'react'
import Home from './pages/Home'
import SearchGames from './pages/SearchGames'
import DetailGame from './pages/DetailGame'
import Header from './components/Header'
import { Link, Route } from 'wouter'
import StaticContex from './context/StaticContext'
import { GamesContextProvider } from './context/GamesContext'

const App = () => {
  return <>
    <StaticContex.Provider value={
      {
        name: 'Adri',
        age: 'No me preguntes eso'
      }
    }>
      <GamesContextProvider>
        <Header></Header>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchGames}
          path='/search/:query'
        />
        <Route
          component={DetailGame}
          path='/game/:id'
        />
      </GamesContextProvider>
    </StaticContex.Provider>
  </>
}

export default App

// App
  // Landing
  // Register
  // Post-Register
  // Login
  // Home
    // Header
    // SideBarMenu
    // GameCard
    // GameDetail
    // UnRegister
    // UserDetail
    // UserSettings