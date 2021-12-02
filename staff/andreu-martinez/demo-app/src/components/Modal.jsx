function Modal ({closeModal, openModal}){

    return <>
        <button onClick={openModal}>Trigger Modal</button>
        <p>Modal text!</p>
        <button onClick={closeModal}>Close Modal</button>
    </>

}

export default Modal