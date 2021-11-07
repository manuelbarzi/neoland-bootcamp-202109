import logger from '../logger'

function Unregister({ onUnregister, onProfile }) {
    logger.info("Unregister -> render")
    return (
        <div className="unregister container container--vertical" onSubmit={event => {
            event.preventDefault()

            const user = {
                password: event.target.password.value
            }
            
            onUnregister(user)
        }}>
            <form className="container container--vertical">
                <h3 className="titles">Eliminar cuenta</h3>
                <input type="password" placeholder="Contraseña" id="password" />

                <div className="container">
                    <button type="button" className="button" onClick={() => onProfile()}>Volver atrás</button>
                    <button className="button button--red">Eliminar usuario</button>
                </div>
            </form>
        </div>
    )
}

export default Unregister