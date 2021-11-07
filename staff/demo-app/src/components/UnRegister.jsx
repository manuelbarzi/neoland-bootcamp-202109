function UnRegister({ onSubmitUnRegister, onGoBack }) {
    return <>
        <div className="unregister container container--vertical container--gapped">
            <form className="container container--vertical" onSubmit={(event) => {
                event.preventDefault()

                const password = event.target.password.value

                onSubmitUnRegister(password)
            }}  >
                <input className="field" type="password" name="password" id="password" placeholder="password" />

                <div className="container">
                    <button className="button button--medium" onClick={() => onGoBack()}>Go back</button>
                    <button className="button button--medium button--dark">Unregister</button>
                </div>
            </form>
        </div>
    </>
}

export default UnRegister