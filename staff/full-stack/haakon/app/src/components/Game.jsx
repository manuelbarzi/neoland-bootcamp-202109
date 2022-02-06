import { Link } from "wouter";
import '../sass/styles.sass'
import Fav from "./Fav";

export default function Game({ id, backgroundImage, name, platforms, genres, score }) {
    return (
        <li key={id} className='gameCard'>
            <div className='gameCardBackground'>
                <img loading="lazy" src={backgroundImage} alt={name} />
            </div>
            <div className='gameCardData'>
                <div className='gameCardData__row-1'>
                    <div className="gameCardData__row-1__platforms">{platforms.map(({ _id, name }) => <span key={_id}>{name}, </span>)}</div>
                    <div className="score">{score}</div>
                </div>
                <h3 className='gameCardData__row-2'><Link to={`/game/${id}`} className="gameCardLink">{name}</Link></h3>
                <div className="gameCardData__row-3">{genres.map(({ _id, name }) => <span key={_id}>{name}, </span>)}</div>
                <div className='gameCardData__row-4'>
                    {/* <button className='icon'>
                        <div className='far fa-bookmark fa-2x'></div>
                    </button>
                    <button className='icon'>
                        <div className='fas fa-heart fa-2x'></div>
                    </button> */}
                    <Fav id={id} />
                </div>
            </div>
        </li>
    )
}