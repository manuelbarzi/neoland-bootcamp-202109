// Styles
import '../sass/styles.sass'

// Logic
import { retrieveFavGames, retrieveGameDetail, toggleFavGame } from '../logic'

// React
import { useEffect, useState, useContext } from 'react'
import AppContext from './AppContext'

const UserDetail = ({ onSettings, handleGame }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [games, setGames] = useState([])

    useEffect(async () => {
        try {
            onFlowStart()
            const favGames = await retrieveFavGames(sessionStorage.token)
            const gamesRequests = favGames.map(async id => {
                try {
                    const game = await retrieveGameDetail(id)

                    return game
                } catch ({ message }) {
                    console.log(message)
                }
            })

            const games = await Promise.all(gamesRequests)

            setGames(games)
            onFlowEnd()
        } catch ({ message }) {
            console.log(message)
        }
    }, [])

    return <div className='userDetail'>
        <div className='userDetail__avatar'>
            <img className='avatar__img' src="https://img.icons8.com/color/48/000000/avatar.png" />
        </div>
        <button className='btn btn--half userDetail__btn' type="button" onClick={() => onSettings()}>Settings</button>
        <div className='bar userDetail__bar'>
            <div className='bar__item'>Overview</div>
            <div className='bar__item'>Review</div>
        </div>
        <h1 className='userDetail__title'>Favorite Games</h1>
        <ul className="gameCards">
            {
                games.map(
                    ({ name, backgroundImage, platform, id }) =>
                        <li key={id} className='gameCard'>
                            <div className='gameCardBackground'>
                                <img src={backgroundImage} alt={name} />
                            </div>
                            <div className='gameCardData'>
                                <div className='gameCardData__row-1'>
                                    <p>{platform}</p>
                                    <button>80</button>
                                </div>
                                <h3 className='gameCardData__row-2' onClick={() => {
                                    handleGame(id)
                                }}>{name}</h3>
                                <p className='gameCardData__row-3'>Action, Adventure</p>
                                <div className='gameCardData__row-4'>
                                    <button className='icon'>
                                        <div className='far fa-bookmark fa-2x'></div>
                                    </button>
                                    <button className='icon' onClick={async () => {
                                        try {
                                            onFlowStart()
                                            await toggleFavGame(sessionStorage.token, id)
                                            onFlowEnd()
                                        } catch ({ message }) {
                                            onFlowEnd()
                                            onFeedback(message)
                                        }
                                    }}>
                                        <div className='fas fa-heart fa-2x'></div>
                                    </button>
                                </div>
                            </div>
                        </li>
                )
            }
        </ul>
    </div>
}

export default UserDetail