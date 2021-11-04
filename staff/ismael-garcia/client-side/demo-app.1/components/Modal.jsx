function Modal(props) {
    return <>
        <div className='container container--vertical modal'>
            <div className='container container--vertical modal__panel'>
                <h1 className='modal__title'>Error</h1>
                <p className='modal__message'>{props.message}</p>
                <button className='button modal__button' type='button'>Okay</button>
            </div>
        </div>
    </>
}