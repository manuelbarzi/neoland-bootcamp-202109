import './Modal.css'

function Modal ({ message, onAccept}) {

   return <div className="modal">
       <div className="modal__pop-up">
           <p className="modal__text">{message}</p>
           <button className="button" onClick={onAccept}>Accept</button>
       </div>
   </div> 


}

export default Modal