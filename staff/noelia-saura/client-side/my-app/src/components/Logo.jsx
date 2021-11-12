function Logo({ image, text }) {

    return <div className="logo ">
        <img className="logo__image" src={image} />
        <h1 className="logo__text">{text}</h1>
    </div>
}

export default Logo