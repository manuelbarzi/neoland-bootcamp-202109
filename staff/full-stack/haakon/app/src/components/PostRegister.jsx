import '../sass/styles.sass'

const PostRegister = ({ handleBtnLogin, handleBtnLanding }) => {
    return <>
        <div className="postRegister">
            <h1 className="postRegister__title">You have successfully registered</h1>
            <button className="btn btn--white postRegister__btn" onClick={() => handleBtnLogin()}>Login</button>
            <button className="btn btn--white postRegister__btn" onClick={() => handleBtnLanding()}>Landing Page</button>
        </div>
    </>
}

export default PostRegister