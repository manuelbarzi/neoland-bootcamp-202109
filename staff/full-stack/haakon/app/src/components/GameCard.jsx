import '../sass/styles.sass'

const GameCard = ({ game, handleGame }) => {

    const { id, backgroundImage, name, platform } = game

    return <>
        <li key={id} className='cards__item'>
            <div className='item__top'>
                <img src={backgroundImage} alt={name} />
            </div>
            <div className='item__botton'>
                <div className='botton__row-1'>
                    <p>{platform}</p>
                    <button>80</button>
                </div>
                <h3 className='botton__row-2' onClick={() => {
                    handleGame(id)
                }}>{name}</h3>
                <p className='botton__row-3'>Action, Adventure</p>
                <div className='botton__row-4'>
                    <button>✔</button>
                    <button>🤍</button>
                </div>
            </div>
        </li>
    </>
}

export default GameCard