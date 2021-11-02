class Modal extends React.Component {
    constructor() {
        logger.info("Modal -> render")
        super()
        this.state = { view: "modal", title: "", message: "" }
    }

    render() {
        return <>
                <div className="modal" id="modal">
                    <div className="modal__pop-up" id="modal-content">
                        <h1 className="modal__title" id="modal-title">{this.props.title}</h1>
                        <p className="modal__text" id="modal-text">{this.props.text}</p>
                        <button className="button button--success" type="button" id="close-modal" onClick={() => this.props.close()}>Aceptar</button>
                    </div>
                </div>

        {this.state.view === "modal" && <SignIn 
            onModalPop={() => this.setState({ view: "modal" })}
            close={this.close}
        ></SignIn>}
        
        {this.state.view === "modal" && <Home 
            onModalPop={() => this.setState({ view: "modal" })}
            close={() => this.setState({})}
        ></Home>}
        </>
    }
}