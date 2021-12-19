
const getNotes = (token, petId) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof petId !== 'number') throw new TypeError(`${petId} is not a number`)

    return (async () => {

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {

            const getNotes = await fetch("http://localhost:8000/notes?petId=" + petId, {})
            if (getNotes.status === 200) {
                const notes = await getNotes.json()
                return notes

            } else if (getNotes.status === 401 || getNotes.status === 404) {
                const { error } = await getNotes.json()
                throw new Error(error)
            } else throw new Error('Get Notes Error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')
    })()
}

export default getNotes