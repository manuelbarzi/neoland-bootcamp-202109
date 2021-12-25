import React, { useEffect, useState } from "react"
import { searchGames } from "../logic"

export default function useGames({ query } = { query: null }) {
    const [loading, setLoading] = useState(false)
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            const queryToUse = query || localStorage.getItem('last-query')
            setLoading(true)
            // recuperamos la query del localStorage
            try {
                const _games = await searchGames(queryToUse)
                setGames(_games)
                setLoading(false)
                // guardamos las query en el localStorage
                localStorage.setItem('last-query', query)
            } catch (message) {
                console.error(message);
            }
        })()
    }, [query])

    return { loading, games }
}