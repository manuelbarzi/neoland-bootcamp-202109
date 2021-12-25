import React, { useState } from "react";
import { Link } from "wouter";
import '../sass/styles.sass'

export default function Game({ id, backgroundImage, name, platform }) {
    const [gameId, setGameId] = useState(null)

    return (
        <li key={id} className='gameCard'>
            <div className='gameCardBackground'>
                <img loading="lazy" src={backgroundImage} alt={name} />
            </div>
            <div className='gameCardData'>
                <div className='gameCardData__row-1'>
                    <p>{platform}</p>
                    {/* <button>80</button> */}
                </div>
                <h3 className='gameCardData__row-2'><Link onClick={() => setGameId(id)} to={`/game/${id}`} className="gameCardLink">{name}</Link></h3>
                <p className='gameCardData__row-3'>Action, Adventure</p>
                <div className='gameCardData__row-4'>
                    <button className='icon'>
                        <div className='far fa-bookmark fa-2x'></div>
                    </button>
                    <button className='icon'>
                        <div className='fas fa-heart fa-2x'></div>
                    </button>
                </div>
            </div>

        </li>
    )
}