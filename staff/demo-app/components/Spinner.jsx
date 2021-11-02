function Spinner() {
    logger.info("Spinner -> render")
    return (
        <svg className="spinner container container--vertical" viewBox="0 0 50 1800" height="50" width="300">
        <g id="spinner">
            <circle className="todos circulo1" cx="400" cy="1000" r="200" />
            <circle className="todos circulo2" cx="800" cy="1400" r="200" />
            <circle className="todos circulo3" cx="200" cy="1600" r="200" />
        </g>
    </svg>
    )
}