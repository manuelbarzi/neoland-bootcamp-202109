import React from 'react'
import { Route } from 'wouter'

import Home from 'pages/Home'
import SearchGames from 'pages/SearchGames'
import DetailGame from 'pages/DetailGame'
import Login from 'pages/Login'
import Register from 'pages/Register'

import { UserContextProvider } from 'context/UserContext'

const App = () => {
  return <>
    <UserContextProvider>
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
    </UserContextProvider>
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