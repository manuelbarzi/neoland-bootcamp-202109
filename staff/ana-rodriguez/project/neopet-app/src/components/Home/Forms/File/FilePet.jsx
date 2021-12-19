import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getFilePet, registerDeparasite, registerNotes, registerVaccine, registerWeight, deleteNotes, deleteDeparasites, deleteVaccines, deleteWeights, deletePet, getWeight, getNotes,getVaccines, getDeparasite } from '../../../../logic';
import { useState, useEffect } from 'react';


function FilePet({ pet }) {
    // destructuring del objeto pet pasado por params
    const { id, hair, layer, age, genre, specie, race, pedigree, chip, date, name, tatoo, passport } = pet;
   
    const [filePet, setFilePet] = useState([]);

    // Carga Inicial de la mascota
    useEffect(() => {
        (async () => {

            try {

                let FilePet = {
                    weight: [],
                    vaccines: [],
                    deparasite: [],
                    notes: []
                }
                const vaccinesGetted = await getVaccines(sessionStorage.token, id)
                FilePet.vaccines = vaccinesGetted

                const deparasiteGetted = await getDeparasite(sessionStorage.token, id)
                FilePet.deparasite = deparasiteGetted

                const weigthGetted = await getWeight(sessionStorage.token, id)
                FilePet.weight = weigthGetted

                const notesGetted = await getNotes(sessionStorage.token, id)
                FilePet.notes = notesGetted

                setFilePet(FilePet)

            } catch (error) {
                alert(error)
                if (error.message === 'invalid token') {
                    navigate('/login')
                }
            }
        })()
    }, []);

    const navigate = useNavigate();

    const updateFilePet = async (event) => {
        event.preventDefault();

        const currentDate = new Date().toLocaleDateString();

        let weigth;
        let vaccine;
        let deparasite;
        let note;

        try {
            if (event.target.weigth.value) {
                weigth = {
                    petId: id,
                    date: currentDate,
                    weigth: event.target.weigth.value
                }
            }
            if (event.target.product.value || event.target.nota.value) {
                vaccine = {
                    petId: id,
                    date: currentDate,
                    product: event.target.product.value || '',
                    nota: event.target.nota.value || ''
                };
            }
            if (event.target.deparasite.value) {
                deparasite = {
                    petId: id,
                    date: currentDate,
                    product: event.target.deparasite.value
                }
            }
            if (event.target.note.value) {
                note = {
                    petId: id,
                    date: currentDate,
                    note: event.target.note.value
                }
            }

            const token = sessionStorage.token;

            const regVaccine = vaccine ? await registerVaccine(token, vaccine) : null;
            const regDeparasite = deparasite ? await registerDeparasite(token, deparasite) : null;
            const regNote = note ? await registerNotes(token, note) : null;
            const regWeight = weigth ? await registerWeight(token, weigth) : null;

            window.location.reload();

        } catch (err) {
            alert(err);
            if (err.message === 'invalid token') {
                navigate('/login')
            }
        }
    }

    const removePet = async (event) => {
        // Abro una ventana de confirmación:
        if (window.confirm('¿Seguro que quieres eliminar la mascota?')) {

            try {
                const token = sessionStorage.token
                await deletePet(token, id)
            } catch (err) {
                debugger;
                alert(err);
                if (err.message === 'invalid token') {
                    navigate('/login')
                }
            }
        }
    }

    return <>
        <form name={"filePet" + id} className="file_container pet" onSubmit={event => updateFilePet(event)}>
            <h1 className="title_file">Mascota - {name}</h1>
            <div className="file">
                <div className="file_data">
                    <p>Registrado: {date}</p>
                    <p>Edad: {age}</p>
                    <p>Genero: {genre}</p>
                    <p>Especie: {specie}</p>
                    <p>Raza: {race}</p>
                    <p>Pedigree: {pedigree ? 'Si' : 'No'}</p>
                    <p>Chip: {chip}</p>
                    <p>Alta: {date}</p>
                    <p>Pelo: {hair}</p>
                    <p>Capa: {layer}</p>
                    <p>Tatuaje: {tatoo}</p>
                    <p>Pasaporte: {passport}</p>
                </div>
                <h2>Peso</h2>
                <ul>
                    {
                        filePet.weigth && filePet.weigth.length > 0 && filePet.weigth.map((data, index) =>
                            <li key={index}>{data.date} - {data.weigth}</li>
                        )
                    }
                    <li>Nuevo: <input className="input_reCliPet" type="text" name="weigth" /></li>
                </ul>
                <h2>Vacunas</h2>
                <ul>
                    {
                        filePet.vaccines && filePet.vaccines.length > 0 && filePet.vaccines.map((data, index) =>
                            <li key={index}>{data.date} - {data.product} - {data.nota}</li>
                        )
                    }
                    <li>Nueva:
                        <input className="input_reCliPet" type="text" name="product" placeholder="Producto" />
                        <input className="input_reCliPet" type="text" name="nota" placeholder="Notas" />
                    </li>
                </ul>
                <h2>Desparasitaciones</h2>
                <ul>
                    {
                        filePet.deparasite && filePet.deparasite.length > 0 && filePet.deparasite.map((data, index) =>
                            <li key={index}>{data.date} - {data.product}</li>
                        )
                    }
                    <li>Nueva: <input className="input_reCliPet" type="text" name="deparasite" placeholder="Producto" /></li>
                </ul>
                <h2>Notas</h2>
                <ul>
                    {
                        filePet.notes && filePet.notes.length > 0 && filePet.notes.map((data, index) =>
                            <li key={index}>{data.date} - {data.note}</li>
                        )
                    }
                    <li><textarea cols="30" rows="10" name="note"></textarea></li>
                </ul>
            </div>
            <div className="button_file">
                <button className="but_note" type='submit'>Guardar</button>
                <button className="but_note alert" type='button' onClick={event => removePet(event)}>Baja</button>
            </div>
        </form>

    </>
}

export default FilePet