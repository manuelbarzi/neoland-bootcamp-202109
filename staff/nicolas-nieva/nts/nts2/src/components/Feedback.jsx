
import { Button, Modal } from 'react-bootstrap'
import { useContext } from 'react';
import AppContext from './AppContext';


function Feedback({modalFeedback, handleClose, modalFeedbackTitle, modalFeedbackMessage, levelFeedback}) {

  const {goToHome } = useContext(AppContext)

  const className = `${levelFeedback ? `text-${levelFeedback}` : ''}`




    return <>
        <Modal show={modalFeedback} onHide={handleClose}>
          <Modal.Header className= {className} closeButton>{modalFeedbackTitle}</Modal.Header>
        <Modal.Body>{modalFeedbackMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant={levelFeedback} onClick={goToHome}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}

export default Feedback

