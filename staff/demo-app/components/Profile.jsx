function Profile(props) {
    return (
        <div className="profile container container--vertical">
            <h3 className="titles">Mi perfil</h3>
            <hr />
            <div className="button--out--form container">
                <button className="button button--config" onClick={() => props.onChangeData()}>Modificar tu datos</button>
            </div>
            <div className="button--out--form container">
                <button className="button button--change--password" onClick={() => props.onChangePassword()}>Cambiar contraseña</button>
            </div>
            <div className="button--out--form container">
                <button className="button button--delete" onClick={() => props.onUnregister()}>Eliminar usuario</button>
            </div>
            <div className="button--out--form container">
                <button type="button" className="button button--back--profile" onClick={() => props.postSignIn()}>Volver atrás</button>
            </div>
            <hr />
        </div>
    )
}