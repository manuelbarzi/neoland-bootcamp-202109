function ChangeData(props) {
    return(
        <div className="modify container container--vertical" onSubmit={event => {
            event.preventDefault()
            const user = {
                name     : event.target.name.value,
                surname  : event.target.surname.value,
                email    : event.target.email.value,
                username : event.target.username.value,
            }
            try {
                updateUserData(sessionStorage.token, user, function (error) {
                    if (error) {
                        //injectableModal("template-modal", "Error", error.message);
                        alert(error.message)
                    }
                    event.target.reset()
                    alert("Tus datos fueron actualziados.")
                })
            } catch (error) {
                //injectableModal("template-modal", "Error", error.message);
                event.target.reset()
                alert(error.message)
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