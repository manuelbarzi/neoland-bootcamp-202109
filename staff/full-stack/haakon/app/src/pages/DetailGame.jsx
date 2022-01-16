import React from "react"
import GameDetail from "../components/GameDetail"
import Header from "../components/Header"
import useGameDetail from "../hooks/useDetailGame"
import Spinner from "components/Spinner"

export default function DetailGame({ params }) {
    const { id } = params
    const { gameDetail, loading } = useGameDetail(id)

    return <>
        <Header></Header>
        {loading
            ? <Spinner />
            : <GameDetail gameDetail={gameDetail} />
        }
    </>
}