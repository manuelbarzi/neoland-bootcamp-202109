function Modal({message, onCloseModal}) {   
    return <>
    <div className='container container--vertical modal'>
        <div className='container container--vertical modal__panel'>
            <h1 className='modal__title'>Error</h1>
            <p>{message}</p>
            <button className='button modal__button button--dark' type='button' onClick={onCloseModal} >Accept</button>
        </div>
    </div>
</>
}
export default Modal