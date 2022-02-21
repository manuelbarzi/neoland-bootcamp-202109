import { Button, Modal, Form } from 'react-bootstrap'


function Login({ show, handleClose }) {
    // const handleSubmit = async event => {
    //     event.preventDefault()
       

    //     const user = {
    //             name,
    //             username,
    //             password,
    //             email,
    //             address,
    //             phone,
    //             province,
    //             location,
    //             country,
    //         };
    //     try {

    //         await signupUser(user)

    //         alert('agencia registrada')


    //     } catch ({ message }) {

    //         alert(message)
    //     }
    // }
    return <>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                >
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        type='text'
                        className='mb-2'
                        name='name'
                        id='name'
                        placeholder='nombre agencia'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='username'
                        id='username'
                        placeholder='usuario'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='contraseña'
                    /> 
                
                    <Modal.Footer>
                        <Button style={{ width: '210px', margin: '20px auto' }}   type='submit' variant="primary">Registrar Agencia</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}

export default Login