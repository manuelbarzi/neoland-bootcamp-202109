import './UnRegister.sass'

function UnRegister({ onSubmitUnRegister, onGoBack }) {
    return <>
        <h1 className="body__title">Delete Account</h1>
        <p className="body__paragraph">Are you sure?</p>
        <form className="unRegister" onSubmit={(event) => {
            event.preventDefault()

            const password = event.target.password.value

            onSubmitUnRegister(password)
        }}  >


            <input className="input unRegister__input" type="password" name="password" id="password" placeholder="Password" />
            <button className="btn unRegister__btn">Unregister</button>
            <button className="btn unRegister__btn" onClick={() => onGoBack()}>Go back</button>
        </form>
    </>
}

export default UnRegister