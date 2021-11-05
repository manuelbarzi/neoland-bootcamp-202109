function Unregister(props) {
    return <>
     <form className="container container--vertical" onSubmit={event => {
            event.preventDefault()

            const password = event.target.password.value

            props.onDeleteAccount(password)
        }}>
            <div className="container container--vertical">
                <input className="field" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div>
                <button className="button" type="button" onClick={() => props.backProfile()}>Back to Profile</button>
                <button className="button" type="submit">Delete account</button>
            </div>
        </form>
    </>
}
export default Unregister