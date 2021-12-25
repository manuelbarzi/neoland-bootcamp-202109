import React, { useState } from "react"
import ListOfGames from "components/ListOfGames"
import useGames from 'hooks/useGames'

export default function Home() {
    const { loading, games } = useGames()

    return <>
        <h1>Home</h1>
        <h2>Last Searches</h2>
        <ListOfGames games={games}></ListOfGames>
    </>
}