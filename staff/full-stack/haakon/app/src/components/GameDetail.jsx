import '../sass/styles.sass'

const GameDetail = ({ gameDetail }) => {
    const { id, name, released, backgroundImage, screenshots, platforms, genres, score } = gameDetail

    return <div className='gameDetail' key={id}>
        <div className='gameDetail__row-1'>
            <div className='releasedDate gameDetail__releasedDate'><time>NOV 20, 2011</time></div>
            <button className='icon'>
                <div className='far fa-heart fa-2x'></div>
            </button>
            <button className='icon'>
                <div className='far fa-bookmark fa-2x'></div>
            </button>
            <button className='icon'>
                <div className='far fa-heart fa-2x'></div>
            </button>
        </div>
        <h1 className='gameDetail__title'>{name}</h1>
        <img className='gameDetail__background' src={backgroundImage} alt={name} />
        {/* <button>Add to Player</button>
        <input type="text" placeholder='Write a comment' /> */}
        <h3 className='gameDetail__about'>About</h3>
        <div className='gameDetail__row-2'>
            <div className='gameDetail__row-2__column'>
                <p className='gameDetail__platform'>Platforms</p>
                <ul>{
                    (platforms != null && platforms.length > 0)
                        ?
                        platforms.map(({ _id, name }) => (
                            <li key={_id}>
                                {name}
                            </li>
                        ))
                        :
                        (<li>No existen datos</li>)
                }</ul>
                <p className='gameDetail__genre'>Genres</p>
                <ul>{
                    (genres != null && genres.length > 0)
                        ?
                        genres.map(({ _id, name }) => (
                            <li key={_id}>
                                {name}
                            </li>
                        ))
                        :
                        (<li>No existen datos</li>)
                }</ul>
            </div>
            <div className='gameDetail__row-2__column'>
                <p className='gameDetail__score'>Meta Score</p>
                <div className="score">{score}</div>
                <p className='gameDetail__releasedDate'>Released Data</p>
                <time>{released}</time>
            </div>
        </div>
    </div>
}

export default GameDetail