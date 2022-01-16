import React from "react"
import ListOfGames from "components/ListOfGames"
import useGames from 'hooks/useGames'
import Header from "../components/Header"
import Spinner from "components/Spinner"

export default function Home() {
    const { loading, games } = useGames()

    return <>
        <Header></Header>
        <h1>Home</h1>
        <h2>Last Searches</h2>
        {loading
            ? <Spinner />
            : <ListOfGames games={games} />
        }
    </>
}