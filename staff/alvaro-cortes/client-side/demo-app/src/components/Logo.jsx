import React from 'react';
import logger from '../logger'
import './Logo.css'

function Logo({ image, text }) {
    logger.info('Logo -> render')

    return <div className="container">
        <img className="logo__image" src={image} />
        <h1 className="logo__text">{text}</h1>
    </div>
}

export default Logo