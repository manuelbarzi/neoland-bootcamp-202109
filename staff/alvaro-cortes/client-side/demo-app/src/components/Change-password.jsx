import logger from '../logger'
import { updateUserPassword } from '../logic'

function ChangePassword(props) {
    logger.info("ChangePassword -> render")
    return (
        <div className="change--password container container--vertical" onSubmit={event => {
            event.preventDefault()

            const { showSpinner, showModal, hideSpinner, onChangePassword } = props
            
            const { target: { reset, password: { value: password }, oldPassword: { value: oldPassword } }} = event
            
            showSpinner()
            const user = {
                password,
                oldPassword
            }

            try {
                updateUserPassword(sessionStorage.token, user, (error) => {
                    if (error) {
                        var error = error.message

                        showModal("Error", error)

                        hideSpinner()

                        onChangePassword()

                        return
                    }
                    reset()

                    showModal("Éxito", "Tu contraseña fue actualizada.")

                    hideSpinner()

                    onChangePassword()
                })
            } catch ({ message }) {

                props.showModal("Error", message)

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

export default ChangePassword