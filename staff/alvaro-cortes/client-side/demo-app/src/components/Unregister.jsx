import logger from '../logger'
import { unregisterUser } from '../logic'

function Unregister(props) {
    logger.info("Unregister -> render")
    return (
        <div className="unregister container container--vertical" onSubmit={event => {
            event.preventDefault()

            const { showSpinner, showModal, hideSpinner, onUnregister, resetTokenAndGoToLogin } = props

            showSpinner()
            const user = {
                password: event.target.password.value
            }
            try {
                unregisterUser(sessionStorage.token, user, (error) => {
                    if (error) {

                        showModal("Error", error.message)

                        hideSpinner()

                        onUnregister()

                        return
                    }

                    event.target.reset()
  
                    showModal("Éxito", "Has eliminado tu cuenta.")
                    
                    hideSpinner()
                    
                    resetTokenAndGoToLogin()
                })
            } catch ({ message }) {

                showModal("Error", message)

                event.target.reset()
                
                hideSpinner()

                onUnregister()
            }
        }}>
            <form className="container container--vertical">
                <h3 className="titles">Eliminar cuenta</h3>
                <input type="password" placeholder="Contraseña" id="password" />

                <div className="container">
                    <button type="button" className="button" onClick={() => props.onProfile()}>Volver atrás</button>
                    <button className="button button--red">Eliminar usuario</button>
                </div>
            </form>
        </div>
    )
}

export default Unregister