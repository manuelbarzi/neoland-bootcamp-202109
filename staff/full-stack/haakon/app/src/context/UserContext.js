import React, { useEffect, useState } from "react"
import { retrieveUser } from "logic"

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [token, setToken] = useState(null)
    const [favs, setFavs] = useState([])

    return <Context.Provider value={{ token, setToken }}>
        {children}
    </Context.Provider>
}

export default Context