const deleteNotes = (token, petId) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        if (res.status === 200) {
            const removeNotes = await fetch("http://localhost:8000/notes?petId="+petId, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (removeNotes.status === 200) {
                const deleteResult = await removeNotes.json();
                return deleteResult;
            } else if (removeNotes.status === 401 || removeNotes.status === 404) {
                const { error } = await removeNotes.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Notas');
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json();
            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default deleteNotes