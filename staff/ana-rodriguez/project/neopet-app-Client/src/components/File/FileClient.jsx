import React from 'react';

function FileClient({ client }) {

    return <>
        <div name="fileClient" className="file_container client">
            <h1 className="title_file">¡Hola! {client.firstName} {client.lastName}</h1>
            <div className="input_file">
                <br />
                <p>Teléfono:{client.phone}</p>
                <p>Direccción:{client.direction}</p>
                <p>Email:{client.email}</p>
            </div>
        </div>

    </>
}

export default FileClient