import logger from '../logger'

function ChangePassword({ onChangePassword, onProfile}) {
    logger.info("ChangePassword -> render")
    return (
        <div className="change--password container container--vertical" onSubmit={event => {
            event.preventDefault()
            
            const { target: { password: { value: password }, oldPassword: { value: oldPassword } }} = event
            
            const user = {
                password,
                oldPassword
            }

            onChangePassword(user)
        }}>

            <form className="container container--vertical">
                <h3 className="titles">Cambiar contraseña</h3>
                <input type="password" placeholder="Nueva contraseña" id="password" />
                <input type="password" placeholder="Contraseña anterior" id="oldPassword" />

                <div className="container">
                    <button className="button" onClick={() => onProfile()}>Volver atrás</button>
                    <button className="button button--red">Acutalizar</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword