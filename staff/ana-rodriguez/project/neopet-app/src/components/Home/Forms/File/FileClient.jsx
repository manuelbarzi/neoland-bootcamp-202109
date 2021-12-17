import React from 'react';
import{modifyClient} from '../../../../logic';

function FileClient({client}) {

    return <>
        <div className="file_container client">
            <h1 className="title_file">Cliente - {client.firstName} {client.lastName}</h1>
            <div className="input_file">
                <label>Teléfono:
                    <input className="input_reCliPet" type="text" name="phone" value={client.phone}/></label>
                <label>Direccción:
                    <input className="input_reCliPet" type="text" name="direction" value={client.direction} /></label>
                <label>Email:
                    <input className="input_reCliPet" type="text" name="email" value={client.email} /></label>
            </div>
        </div>

    </>
}

export default FileClient