import { useEffect, useState } from "react"
import { searchGames } from "../logic"

export default function useGames({ query } = { query: null }) {
    const [spinner, setSpinner] = useState(false)
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            const queryToUse = query || localStorage.getItem('last-query')
            setSpinner(true)
            // recuperamos la query del localStorage
            try {
                const _games = await searchGames(queryToUse)
                setGames(_games)
                setSpinner(false)
                // guardamos las query en el localStorage
                localStorage.setItem('last-query', query)
            } catch ({ message }) {
                console.error(message);
                setSpinner(false)
            }
        })()
    }, [query])

    return {
        spinner,
        games
    }
}