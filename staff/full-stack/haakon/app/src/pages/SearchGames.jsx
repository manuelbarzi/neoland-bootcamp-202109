import React from "react"
import Spinner from "components/Spinner"
import ListOfGames from "components/ListOfGames"
import useGames from 'hooks/useGames'

export default function SearchGames({ params }) {
    const { query } = params
    const { loading, games } = useGames({ query })

    return <>
        {loading
            ? <Spinner />
            : <ListOfGames games={games} />
        }
    </>
}