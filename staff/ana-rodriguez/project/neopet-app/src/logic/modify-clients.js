const modifyClient = (client,token) => {

    return new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest;

        xhr.onload = () => {
            const {status} = xhr
            if (status === 400) reject('wrong credential')
            else if(status === 404) reject('page not found')
            else if(status === 200) resolve('datos cambiados correctamente')    
        }
         xhr.open("PATCH", "http://localhost:8000/client/"+client.id);
         xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(client));
    })
}

export default modifyClient