import '../sass/styles.sass'
import Game from './Game'

export default function ListOfGames({ games }) {
    return <ul className="gameCards">
        {
            games.map(({ id, backgroundImage, name, platforms, genres, score }) =>
                <Game
                    key={id}
                    id={id}
                    backgroundImage={backgroundImage}
                    name={name}
                    platforms={platforms}
                    genres={genres}
                    score={score}>
                </Game>)
        }
    </ul>
}