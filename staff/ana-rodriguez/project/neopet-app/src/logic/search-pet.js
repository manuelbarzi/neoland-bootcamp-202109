const searchPet = (pet, token) => {

    return new Promise((resolve,reject)=> {
        const {name,client} = pet
        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const {status,responseText} = xhr 
            if (status === 400) reject('wrong credential')
            else if (status === 404) reject ('page not found')
            else if(status === 200) resolve (JSON.parse(responseText))
        
        }
         let url;
        if(name){
            url="http://localhost:8000/pets?name="+name
        }
        else if(client) {
            url="http://localhost:8000/pets?client="+client
        }

        xhr.open("GET", url );
        xhr.send(JSON.stringify(pet));
    })
}

export default searchPet