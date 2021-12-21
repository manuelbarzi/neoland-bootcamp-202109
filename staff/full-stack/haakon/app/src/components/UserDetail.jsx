// import './UserDetail.sass'

const UserDetail = ({ onSettings }) => {
    return <>
        <div className='header__avatar'><img src="https://img.icons8.com/color/48/000000/avatar.png" />{/*name*/}</div>
        <button type="button" onClick={() => onSettings()}>Settings</button>
        <nav>
            <a href="">Overview</a>
            <a href="">Review</a>
        </nav>
        <h3>Favorite Games</h3>
    </>
}

export default UserDetail