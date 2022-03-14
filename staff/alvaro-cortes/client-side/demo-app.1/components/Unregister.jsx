function Unregister(props) {
    logger.info("Unregister -> render")
    return (
        <div className="unregister container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.showSpinner()
            const user = {
                password: event.target.password.value
            }
            try {
                unregisterUser(sessionStorage.token, user, (error) => {
                    if (error) {
                        var error = error.message

                        props.showModal("Error", error)

                        props.hideSpinner()

                        props.onUnregister()

                        return
                    }

                    event.target.reset()
  
                    props.showModal("Éxito", "Has eliminado tu cuenta.")
                    
                    props.hideSpinner()
                    
                    props.resetTokenAndGoToLogin()
                })
            } catch (error) {
                var errorM = error.message

                props.showModal("Error", errorM)

                event.target.reset()
                
                props.hideSpinner()

                props.onUnregister()
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