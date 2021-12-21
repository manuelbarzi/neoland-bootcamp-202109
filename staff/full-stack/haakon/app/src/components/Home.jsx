// Styles
import '../sass/styles.sass'

// Componentes
import Header from './Header'
import GameCard from './GameCard'
import GameDetail from './GameDetail'
import UserDetail from './UserDetail'
import UserSettings from './UserSettings'
import UnRegister from './UnRegister'

// Logic Functions
import { retrieveUser, retrieveGameDetail } from '../logic'

// React
import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'

// Utils
import logger from '../logger'

const Home = ({ onAuthError, unRegisterd }) => {
    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('')
    const [name, setName] = useState(null)
    const [games, setGames] = useState([])
    const [gameDetail, setGameDetail] = useState({})
    const [query, setQuery] = useState('')

    useEffect(async () => {
        logger.debug('Home -> useEffect (componentDidMount)')

        const { token } = sessionStorage

        if (token) {
            try {
                onFlowStart()
                const user = await retrieveUser(token)
                onFlowEnd()
                const { name } = user
                setName(name)
            } catch ({ message }) {
                onFlowEnd()
                onFeedback(message, 'warn')
                onAuthError()
            }
        }
    }, [])

    const retrieveGame = async (id) => {
        try {
            const gameDetail = await retrieveGameDetail(id)
            setGameDetail(gameDetail)
            setView('game-detail')
        } catch ({ message }) {
            console.log(message);
        }
    }

    const goToUserDetail = () => setView('user-detail')
    const goToUserSettings = () => setView('user-settings')
    const goToDeleteAccount = () => setView('unregister')


    return <>
        <Header setView={setView} setGames={setGames} setQuery={setQuery} query={query} name={name} onClickAvatar={goToUserDetail}></Header>
        {view === 'game' && <ul className="cards">{games.map(game => < GameCard game={game} handleGame={retrieveGame} />)}</ul>}
        {view === 'game-detail' && <GameDetail gameDetail={gameDetail}></GameDetail>}
        {view === 'user-detail' && <UserDetail onSettings={goToUserSettings}></UserDetail>}
        {view === 'user-settings' && <UserSettings onDeleteAccount={goToDeleteAccount}></UserSettings>}
        {view === 'unregister' && <UnRegister unRegistered={unRegisterd} ></UnRegister>}
    </>
}

export default Home