import { Button, Modal, Form } from 'react-bootstrap'
import { signupUser } from '../logic'
// import PostRegister from './PostRegister'

function Register({ show, handleClose }) {
    const handleSubmit = async event => {
        event.preventDefault()

        const { target: { name: { value: name }, username: { value: username }, email: { value: email }, password: { value: password },
            address: { value: address }, phone: { value: phone }, province: { value: province },
            location: { value: location }, country: { value: country } } } = event
       

        const user = {
                name,
                username,
                password,
                email,
                address,
                phone,
                province,
                location,
                country,
            };
        try {

            await signupUser(user)

            alert('agencia registrada')


        } catch ({ message }) {

            alert(message)
        }
    }
    return <>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Registrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} 
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
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='email'
                        id='email'
                        placeholder='correo electronico'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='address'
                        id='address'
                        placeholder='direccion'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='telefono'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='province'
                        id='province'
                        placeholder='provincia'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}
                        className='mb-2'
                        type='text'
                        name='location'
                        id='location'
                        placeholder='ciudad'
                    />
                    <Form.Control style={{ width: '210px', margin: '20px auto' }}   
                        className='mb-5'
                        type='text'
                        name='country'
                        id='country'
                        placeholder='pais'
                    />
                    <Modal.Footer>
                        <Button style={{ width: '210px', margin: '20px auto' }}   type='submit' variant="primary">Registrar Agencia</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}

export default Register