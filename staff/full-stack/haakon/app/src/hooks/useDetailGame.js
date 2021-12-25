import { useContext, useEffect, useState } from "react"
import { retrieveGameDetail } from "../logic"

export default function useGameDetail(id) {
    const [loading, setLoading] = useState(false)
    const [game, setGame] = useState({})

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                debugger
                const _game = await retrieveGameDetail(id)
                setLoading(false)
                setGame(_game)
            } catch (message) {
                console.error(message);
            }
        })()
    }, [id])

    return { loading, game }
}