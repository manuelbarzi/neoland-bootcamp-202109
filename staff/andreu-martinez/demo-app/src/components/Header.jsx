function Header({goToProfile, goToFavs, goToCart, onSignOut, name}) {

    return <>
    <div className="header">
        <div className="home container">

            <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
        </div>
        <div>
            <button className="button" onClick={goToProfile}>Profile</button>
            <button className="button" onClick={goToFavs}>Favs</button>
            <button className="button" onClick={goToCart}>Cart</button>
            <button className="button" onClick={onSignOut}>Sign Out</button>
        </div>
    </div>
    </>

}

export default Header