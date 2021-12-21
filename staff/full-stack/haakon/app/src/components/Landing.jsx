import '../sass/styles.sass'

function Landing({ handleBtnLogin, handleBtnRegister }) {
    return (
        <div className="landing">
            <h1 className="landing__title">My App</h1>
            <button className='btn landing__btn' type="button" onClick={() => handleBtnLogin()}>Login</button>
            <button className='btn landing__btn' type="button" onClick={() => handleBtnRegister()}>Register</button>
        </div>
    )
}

export default Landing