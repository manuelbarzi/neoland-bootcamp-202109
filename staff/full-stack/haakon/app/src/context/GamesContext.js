import React, { useState } from "react"

const Context = React.createContext()

export function GamesContextProvider({ children }) {
    const [games, setGames] = useState([])

    return <Context.Provider value={{ games, setGames }}>
        {children}
    </Context.Provider>
}

export default Context