import React from 'react'
import Home from './pages/Home'
import SearchGames from './pages/SearchGames'
import DetailGame from './pages/DetailGame'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route } from 'wouter'

const App = () => {
  return <>
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
    <Route
      component={Login}
      path='/login'
    />
    <Route
      component={Register}
      path='/register'
    />
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