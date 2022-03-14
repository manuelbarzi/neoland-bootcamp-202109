function ChangeData(props) {
    logger.info("ChangeData -> render")
    return(
        <div className="modify container container--vertical" onSubmit={event => {
            event.preventDefault()
            props.showSpinner()
            const user = {
                name     : event.target.name.value,
                surname  : event.target.surname.value,
                email    : event.target.email.value,
                username : event.target.username.value,
            }
            try {
                updateUserData(sessionStorage.token, user, function (error) {
                    if (error) {
                        var error = error.message

                        props.showModal("Error", error)

                        props.hideSpinner()

                        return
                    }
                    event.target.reset()

                    props.showModal("Éxito", "Tus datos fueron actualizados.")

                    props.hideSpinner()

                    props.onChangeData()
                })
            } catch (error) {
                var errorM = error.message

                props.showModal("Error", errorM)

                props.hideSpinner()
                
                props.onChangeData()
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