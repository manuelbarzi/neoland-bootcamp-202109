
import { Button, Modal } from 'react-bootstrap'

function PostRegister({show, handleClose}) {
    return <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}

export default PostRegister

