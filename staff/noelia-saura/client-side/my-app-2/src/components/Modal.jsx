import logger from "../logger";

function Modal ({level,message,onAccept}){
    if(level === 'succes')
        logger.info(message)
    else if (level === 'warn')
        logger.info(message)
    else if(level==='error')
        logger.info(message)

    const className=`modal_text ${level? `modal_text-- ${level}`:''}`
    return <div className="modal container container--vertical container--full">
    <div className="panel container container--vertical container--gapped">
        <p className={className}>{message}</p>
        <button className="button button--dark" onClick={onAccept}>Accept</button>
    </div>
</div>
}

export default Modal