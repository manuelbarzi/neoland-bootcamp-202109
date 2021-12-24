// React
import React, { useContext } from "react";
import '../sass/styles.sass'
import Game from './Game'
import useGames from "../hooks/useGames";

export default function ListOfGames({ games }) {
    return <ul className="gameCards">
        {
            games.map(({ id, backgroundImage, name, platform }) =>
                <Game
                    key={id}
                    id={id}
                    backgroundImage={backgroundImage}
                    name={name}
                    platform={platform}>
                </Game>)
        }
    </ul>
}