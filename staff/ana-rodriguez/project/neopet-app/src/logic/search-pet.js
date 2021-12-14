const searchPet = (pet, token) => {

    return new Promise((resolve,reject)=> {
        const name = pet
        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const {status,responseText} = xhr 
            if (status === 400) reject('wrong credential')
            else if (status === 404) reject ('page not found')
            else if(status === 200) resolve (JSON.parse(responseText))
        
        }
        xhr.open("GET", "http://localhost:8000/pets?name="+name)
        xhr.send(JSON.stringify(pet))
    })
}

export default searchPet