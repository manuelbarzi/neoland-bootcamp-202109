const getFilePet = (token, petId) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof petId !== 'number') throw new TypeError(`${petId} is not a number`)

    //Objeto que voy a retornar
    let FilePet = {
        weight:[],
        vaccines:[],
        deparasite:[],
        notes:[]
    }

    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            // Vacunas
            const getVaccines = await fetch("http://localhost:8000/vaccines?petId=" + petId, {})
            if (getVaccines.status === 200) {
                
                const vaccines = await getVaccines.json(); // Array de vacunas
                FilePet.vaccines = vaccines; // añado las vacunas al objeto a retornar

                // Desparasitaciones
                const getDeparasites = await fetch("http://localhost:8000/deparasite?petId=" + petId, {})
                if (getDeparasites.status === 200) {
                    const deparasite = await getDeparasites.json(); // Array de desparasitaciones
                    FilePet.deparasite = deparasite; // añado las desparasitaciones al objeto a retornar

                    //Notas
                    const getNotes = await fetch("http://localhost:8000/notes?petId=" + petId, {})
                    if (getNotes.status === 200) {
                        const notes = await getNotes.json(); // Array de notas
                        FilePet.notes = notes; // añado las notas al objeto a retornar

                        //Weight
                        const getWeigths = await fetch("http://localhost:8000/weigth?petId=" + petId, {})
                        if (getWeigths.status === 200) {
                            const weigth = await getWeigths.json(); // Array de notas
                            FilePet.weigth = weigth; // añado las notas al objeto a retornar

                            return FilePet;//devuelvo el objeto con todos los datos

                        }else if (getWeigths.status === 401 || getWeigths.status === 404) {
                            const { error } = await getWeigths.json()
                            throw new Error(error)
                        } else throw new Error('Get weight Error')

                    }else if (getNotes.status === 401 || getNotes.status === 404) {
                        const { error } = await getNotes.json()
                        throw new Error(error)
                    } else throw new Error('Get Notes Error')

                }else if (getDeparasites.status === 401 || getDeparasites.status === 404) {
                    const { error } = await getDeparasites.json()
                    throw new Error(error)
                } else throw new Error('Get Deparasite Error')

            } else if (getVaccines.status === 401 || getVaccines.status === 404) {
                const { error } = await getVaccines.json()
                throw new Error(error)
            } else throw new Error('Get Vaccine Error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default getFilePet