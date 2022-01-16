import React from "react"
import Spinner from "components/Spinner"
import ListOfGames from "components/ListOfGames"
import useGames from 'hooks/useGames'
import Header from "../components/Header"

export default function SearchGames({ params }) {
    const { query } = params
    const { loading, games } = useGames({ query })

    return <>
        <Header></Header>
        {loading
            ? <Spinner />
            : <ListOfGames games={games} />
        }
    </>
}