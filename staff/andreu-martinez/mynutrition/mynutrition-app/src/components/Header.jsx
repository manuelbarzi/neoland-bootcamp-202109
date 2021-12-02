// import "./style.css"

function Header({ goToProfile, goToSearch, goToFavs, goToCart, onSignOut, name }) {

    return  <div className="header">
                <div className="header__user">
                    <p>Hello, <span className="name">{name ? name : 'World'}</span>!</p>
                </div>

                <div></div>
                <div className="header__menu">
                    <button className="button" onClick={goToSearch}>Search</button>
                    <button className="button" onClick={goToFavs}>Favs</button>
                    <button className="button" onClick={goToCart}>Cart</button>
                    <button className="button" onClick={goToProfile}>Profile</button>
                    <button className="button" onClick={onSignOut}>Sign Out</button>
                </div>
            </div>

}

export default Header