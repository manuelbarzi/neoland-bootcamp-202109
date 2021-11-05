import './Modal.css'

/*class Modal extends React.Component {
    constructor() {
        logger.info("Modal -> render")
        super()
        this.state = { title: "", message: "" }
    }

    render() {
        return <>
            <div className="modal" id="modal">
                <div className="modal__pop-up" id="modal-content">
                    <h1 className="modal__title" id="modal-title">{this.props.title}</h1>
                    <p className="modal__text" id="modal-text">{this.props.text}</p>
                    <button className="button button--success" type="button" id="close-modal" onClick={() => this.props.closeModal()}>Aceptar</button>
                </div>
            </div>

        </>
    }
}*/

function Modal(props) {
    return (
        <div className="modal" id="modal">
            <div className="modal__pop-up" id="modal-content">
                <h1 className="modal__title" id="modal-title">{props.title}</h1>
                <p className="modal__text" id="modal-text">{props.text}</p>
                <button className="button button--success" type="button" id="close-modal" onClick={() => props.closeModal()}>Aceptar</button>
            </div>
        </div>

    )
}

export default Modal