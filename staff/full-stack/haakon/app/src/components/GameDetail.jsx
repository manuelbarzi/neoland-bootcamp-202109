// import './GameDetail.sass'

const GameDetail = ({ gameDetail }) => {
    const { name, description, released, backgroundImage } = gameDetail
    return <>
        <h1>{name}</h1>
        <img src={backgroundImage} alt={name} />
        <button>Add to Player</button>
        <input type="text" placeholder='Write a comment' />
        <p>About</p>
        <p>{description}</p>
        <p>Platforms</p>
        <p>PlaySttion, Xbox, Nintendo</p>
        <p>Genres</p>
        <p>Action, Adventure</p>
        <p>Meta Score</p>
        <p>10</p>
        <p>Released Data</p>
        <time>{released}</time>
    </>
}

export default GameDetail