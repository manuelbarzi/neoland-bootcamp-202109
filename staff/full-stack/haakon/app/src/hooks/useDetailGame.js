import { useEffect, useState } from "react"
import { retrieveGameDetail } from "../logic"

export default function useGameDetail(id) {
    const [loading, setLoading] = useState(false)
    const [gameDetail, setGameDetail] = useState({})

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const gameDetail = await retrieveGameDetail(id)
                setGameDetail(gameDetail)
                setLoading(false)
            } catch ({ message }) {
                console.log(message);
            }
        })()
    }, [id])

    return { loading, gameDetail }
}