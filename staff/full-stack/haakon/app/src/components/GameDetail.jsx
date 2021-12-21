import '../sass/styles.sass'

const GameDetail = ({ gameDetail }) => {
    const { name, description, released, backgroundImage } = gameDetail
    return <div className='gameDetail'>
        <h1 className='gameDetail__title'>{name} <button className='btnFav'>🤍</button><button className='btnQueu'>✔</button></h1>
        <img className='gameDetail__background' src={backgroundImage} alt={name} />
        {/* <button>Add to Player</button>
        <input type="text" placeholder='Write a comment' /> */}
        <h4 className='gameDetail__about'>About</h4>
        <p className='gameDetail__description'>{description}</p>
        <div className='gameDetail__row'>
            <div className='gameDetail__row__column'>
                <p>Platforms</p>
                <p>PlaySttion, Xbox, Nintendo</p>
                <p>Genres</p>
                <p>Action, Adventure</p>
            </div>
            <div className='gameDetail__row__column'>
                <p>Meta Score</p>
                <p>10</p>
                <p>Released Data</p>
                <time>{released}</time>
            </div>
        </div>
    </div>





}

export default GameDetail