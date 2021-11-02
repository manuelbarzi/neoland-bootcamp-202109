function ChangePassword(props) {
    logger.info("ChangePassword -> render")
    return (
        <div className="change--password container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.goToSpinner()
            const user = {
                password: event.target.password.value,
                oldPassword: event.target.oldPassword.value
            }

            try {
                updateUserPassword(sessionStorage.token, user, (error) => {
                    if (error) {
                        //injectableModal("template-modal", "Error", error.message);
                        alert(error.message)
                    }
                    event.target.reset()
                    alert("Tu contraseña fue cambiada con éxito.")
                    props.onProfile()
                })
            } catch (error) {
                //injectableModal("template-modal", "Error", error.message);
                event.target.reset()
                alert(error.message)

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