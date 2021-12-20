import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getVaccines, getDeparasite, getWeigths } from '../../logic';
import { useState, useEffect } from 'react';


function FilePet({ pet }) {
    // destructuring del objeto pet pasado por params
    const { id, hair, layer, age, genre, specie, race, pedigree, chip, date, name,tatoo,passport } = pet
    // Hook para datos de la consulta de 
    // vaccines, deparasite, weigth
    const [filePet, setFilePet] = useState([])

    // Carga Inicial de la mascota
    useEffect(() => {
        (async () => {
            try {
                const token = sessionStorage.token

                let FilePet = {
                    weigth:[],
                    vaccines:[],
                    deparasite:[]
                }

                const vaccinesGetted = await getVaccines(token, id);
                FilePet.vaccines = vaccinesGetted;

                const deparasiteGetted = await getDeparasite(token, id);
                FilePet.deparasite = deparasiteGetted;

                const weigthGetted = await getWeigths(token,id);
                FilePet.weigth = weigthGetted;


                setFilePet(FilePet);//Guardo el objetode la lógica
            } catch (err) {
                alert(err);
                if (err.message === 'invalid token') {
                    navigate('/login')
                }
            }
        })()
    }, [])

    const navigate = useNavigate()

    return <>
        <div name={"filePet" + id} className="file_container pet">
            <h1 className="title_file">Mascota - {name}</h1>
            <div className="file">
                <div className="file_data">
                    <p>Edad: {age}</p>
                    <p>Genero: {genre}</p>
                    <p>Especie: {specie}</p>
                    <p>Raza: {race}</p>
                    <p>Pedigree: {pedigree?'Si':'No'}</p>
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
                </ul>
                <h2>Vacunas</h2>
                <ul>
                    {
                        filePet.vaccines && filePet.vaccines.length > 0 && filePet.vaccines.map((data, index) =>
                            <li key={index}>{data.date} - {data.product} - {data.nota}</li>
                        )
                    }
                </ul>
                <h2>Desparasitaciones</h2>
                <ul>
                    {
                        filePet.deparasite && filePet.deparasite.length > 0 && filePet.deparasite.map((data, index) =>
                            <li key={index}>{data.date} - {data.product}</li>
                        )
                    }
                </ul>
            </div>
        </div>

    </>
}

export default FilePet