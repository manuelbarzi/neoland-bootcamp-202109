function ChangePassword(props) {
    logger.info("ChangePassword -> render")
    return (
        <div className="change--password container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.showSpinner()
            const user = {
                password: event.target.password.value,
                oldPassword: event.target.oldPassword.value
            }

            try {
                updateUserPassword(sessionStorage.token, user, (error) => {
                    if (error) {
                        var error = error.message

                        props.showModal("Error", error)

                        props.hideSpinner()

                        props.onChangePassword()

                        return
                    }
                    event.target.reset()

                    props.showModal("Éxito", "Tu contraseña fue actualizada.")

                    props.hideSpinner()

                    props.onChangePassword()
                })
            } catch (error) {
                var errorM = error.message

                props.showModal("Error", errorM)

                props.hideSpinner()

                props.onChangePassword()

            }
        }}>

            <form className="container container--vertical">
                <h3 className="titles">Cambiar contraseña</h3>
                <input type="password" placeholder="Nueva contraseña" id="password" />
                <input type="password" placeholder="Contraseña anterior" id="oldPassword" />

                <div className="container">
                    <button className="button" onClick={() => props.onProfile()}>Volver atrás</button>
                    <button className="button button--red">Acutalizar</button>
                </div>
            </form>
        </div>
    )
}