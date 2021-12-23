import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Card } from 'react-bootstrap';
import { useContext } from 'react';
import AppContext from './AppContext';

import { signupUser } from '../logic/index';

function SignUp({ goToPostSignUp, onSignIn }) {
  const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext);
  return (
    <>
      
      <Card.Title className='container container--vertical'>Registrar agencia</Card.Title>
      <Form
        className='container container--vertical'
        onSubmit={async (event) => {
          event.preventDefault();

          // const name = event.target.name.value
          // TODO recoger los valores del formulario

          const name = event.target.name.value;
          const username = event.target.username.value;
          const password = event.target.password.value;
          const email = event.target.email.value;
          const address = event.target.address.value;
          const phone = event.target.phone.value;
          const province = event.target.province.value;
          const location = event.target.location.value;
          const country = event.target.country.value;

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
            onFlowStart()

            await signupUser(user)

            goToPostSignUp()

            onModal('Agencia registrada')

            onFlowEnd()

          } catch ({ message }) {

            onModal(message)
            onFlowEnd()
          }

          event.target.reset();
        }}
      >
        <Form.Control style={{ width: '230px' }}
          type='text'
          className='field'
          name='name'
          id='name'
          placeholder='nombre agencia'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='username'
          id='username'
          placeholder='usuario'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='password'
          name='password'
          id='password'
          placeholder='contraseña'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='email'
          id='email'
          placeholder='correo electronico'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='address'
          id='address'
          placeholder='direccion'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='phone'
          id='phone'
          placeholder='telefono'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='province'
          id='province'
          placeholder='provincia'
        />
        <Form.Control style={{ width: '230px' }}
          className='field'
          type='text'
          name='location'
          id='location'
          placeholder='ciudad'
        />
        <Form.Control style={{ width: '230px' }}
          type='text'
          name='country'
          id='country'
          placeholder='pais'
        />

        <div className='container container--vertical container--gapped'>
          <Button className='button' type='submit'>Registrar Agencia</Button>
          <div className='container--gapped'></div>
          <Button className='button' onClick={() => onSignIn()}>Iniciar Sesion </Button>
        </div>
      </Form>
    </>
  );
}

export default SignUp;
