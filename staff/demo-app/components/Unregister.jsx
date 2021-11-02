function Unregister(props) {
    return (
        <div className="unregister container container--vertical" onSubmit={event => {
            event.preventDefault()
            const user = {
                password: event.target.password.value
            }
            try {
                unregisterUser(sessionStorage.token, user, (error) => {
                    if (error) {
                        //injectableModal("template-modal", "Error", error.message);
                        alert(error.message)
                    }

                    event.target.reset()
                    alert("Usuario eliminado con éxito.")
                    props.signOut()
                })
            } catch (error) {
                //injectableModal("template-modal", "Error", error.message);
                alert(error.message)
                event.target.reset()
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