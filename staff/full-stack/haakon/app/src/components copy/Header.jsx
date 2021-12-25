import '../sass/styles.sass'
import Search from './Search'

const Header = ({ setView, setGames, setQuery, query, name, onClickAvatar }) => {
    return (
        <header className='header'>
            <div className='header__logo'><a href="/">HAAKON</a></div>
            <Search setView={setView} setGames={setGames} setQuery={setQuery} query={query} />
            <div className='header__avatar' onClick={() => onClickAvatar()}><img src="https://img.icons8.com/color/48/000000/avatar.png" />{name}</div>
            <div className='header__menu'><img src="https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/28/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-fresh-tal-revivo.png" /></div>
        </header>
    )
}

export default Header