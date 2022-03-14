import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'
import { retrieveReservation } from './../logic'
import { useParams, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, ListGroup } from 'react-bootstrap'
import ModifyReservation from './ModifyReservation'
import deleteReservation from './../logic/delete-reservation'
import DeleteReservationModal from './DeleteReservationModal'


function ReservationDetail() {

    const [reservation, setReservation] = useState({})

    const [modifyReservationModal, setModifyReservation] = useState(false);
    const handleCloseModifyReservation = () => setModifyReservation(false);
    const handleShowModifyReservation = () => setModifyReservation(true);

    const [deleteReservationModal, setDeleteReservation] = useState(false);
    const handleCloseDeleteReservation = () => setDeleteReservation(false);
    const handleShowDeleteReservation = () => setDeleteReservation(true);

    const { showModalFeedback, showLoading, hideLoading } = useContext(AppContext);

    const { id } = useParams()
    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const { token } = sessionStorage

        try {
            showLoading()

            const reservation = await retrieveReservation(token, id)

            setReservation(reservation)

            hideLoading()
        } catch ({ message }) {
            hideLoading()

            showModalFeedback('Error', message, 'danger')
        }
    }, [])


    const { agent, from, until, notes, pax, product, quantity, state } = reservation
    return <>
        <ListGroup>
            <ListGroup.Item variant='primary'>
                Pax: {pax} x {quantity}
            </ListGroup.Item>
            <ListGroup.Item variant='primary'>Producto: {product}</ListGroup.Item>
            <ListGroup.Item variant='primary'>In: {from}</ListGroup.Item>
            <ListGroup.Item variant='primary'>Out: {until}</ListGroup.Item>
            <ListGroup.Item variant='primary'>Estado: {state}</ListGroup.Item>
            <ListGroup.Item variant='primary'>Agente: {agent}</ListGroup.Item>
            <ListGroup.Item variant='primary'>
                <ListGroup className=''>
                    {notes ?
                        notes.map(({ id, text, date }) =>
                            <ListGroup.Item variant='secondary'
                                key={id} >
                                Notas: {text}
                                <span> {date.slice(0, 10)}</span>
                            </ListGroup.Item>
                        )
                        :
                        null
                    }
                </ListGroup>
            </ListGroup.Item>
            <Button onClick={() => navigate('/reservations')}><i className="fa-lg far fa-arrow-alt-circle-left"></i></Button>
            <Button onClick={handleShowModifyReservation} className='button' >Modificar Reserva</Button>
            <Button variant='danger' onClick={handleShowDeleteReservation}>Borrar Reserva</Button>

            <Button className='button'>Añadir Nota</Button>
        </ListGroup>

        <ModifyReservation id={id} modifyReservationModal={modifyReservationModal} handleCloseModifyReservation={handleCloseModifyReservation} setReservation={setReservation} />
        <DeleteReservationModal id={id} deleteReservationModal={deleteReservationModal} handleCloseDeleteReservation={handleCloseDeleteReservation} />

    </>
}

export default ReservationDetail