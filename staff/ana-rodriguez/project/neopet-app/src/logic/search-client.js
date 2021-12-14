function searchClient (client,token) {

    return new Promise((resolve,reject) => {
        const {firstName,lastName}=client;
        const xhr = new XMLHttpRequest;

        xhr.onload = () => {
            const {status,responseText} = xhr 
            if (status === 400) reject('wrong credential')
            else if (status === 404) reject ('page not found')
            else if(status === 200) resolve (JSON.parse(responseText))
        }
        
        let url;

        if (firstName&&lastName){
            url="http://localhost:8000/clients?firstName="+firstName+"&lastName="+lastName;
        }
        else if (firstName){
            url="http://localhost:8000/clients?firstName="+firstName
        }
        else if (lastName){
            url="http://localhost:8000/clients?lastName="+lastName
        }

        xhr.open("GET",url)
        xhr.send(JSON.stringify(client))
    })
}

export default searchClient