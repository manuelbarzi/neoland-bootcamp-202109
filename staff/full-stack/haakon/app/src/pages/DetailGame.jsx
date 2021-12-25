import React, { useContext } from "react"
import Game from "components/Game"
import useGameDetail from "../hooks/useDetailGame"

export default function DetailGame({ params }) {
    const { id } = params
    debugger
    const [loading, game] = useGameDetail(id)

    return <Game game={game} />
}