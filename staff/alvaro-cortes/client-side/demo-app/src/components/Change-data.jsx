import logger from '../logger'
import { updateUserData } from '../logic'

function ChangeData(props) {
    logger.info("ChangeData -> render")

    return(
        <div className="modify container container--vertical" onSubmit={event => {
            event.preventDefault()

            const { showModal, hideSpinner, showSpinner, onChangeData } = props
            
            const { target: { reset, name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username } } } = event
            
            showSpinner()

            const user = {
                name,
                surname,
                email,
                username
            }
            try {
                updateUserData(sessionStorage.token, user, function (error) {
                    if (error) {

                        showModal("Error", error.message)

                        hideSpinner()

                        return
                    }
                    reset()

                    showModal("Éxito", "Tus datos fueron actualizados.")

                    hideSpinner()

                    onChangeData()
                })
            } catch ({ message }) {

                showModal("Error", message)

                hideSpinner()
                
                onChangeData()
            }
        }}>
        <form className="container container--vertical">
            <h3 className="titles">Modificar datos</h3>
            <input type="text" placeholder="Nombre" id="name" />
            <input type="text" placeholder="Apellido" id="surname" />
            <input type="email" placeholder="Email" id="email" />
            <input type="text" placeholder="Usuario" id="username" />

            <div className="container">
                <button className="button" onClick={() => props.onProfile()}>Volver atrás</button>
                <button className="button button--red">Actualizar</button>
            </div>
        </form>
    </div>
    )
}

export default ChangeData