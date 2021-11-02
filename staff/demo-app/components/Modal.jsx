function Modal(props) {
    return (
        <template id="template-modal">
            <div className="modal" id="modal">
                <div className="modal__pop-up" id="modal-content">
                    <h1 className="modal__title" id="modal-title">{props.title}</h1>
                    <p className="modal__text" id="modal-text">{props.text}</p>
                    <button className="button button--success" type="button" id="close-modal">Aceptar</button>
                </div>
            </div>
        </template>
    )
}