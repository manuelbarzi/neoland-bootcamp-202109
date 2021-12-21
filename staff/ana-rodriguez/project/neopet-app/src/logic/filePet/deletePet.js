const deletePet = (token, petId) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        if (res.status === 200) {
            const removePet = await fetch("http://localhost:8000/pets/"+petId, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (removePet.status === 200) {
                const deleteResult = await removePet.json();
                return deleteResult;
            } else if (removePet.status === 401 || removePet.status === 404) {
                const { error } = await removePet.json();
                throw new Error(error)
            } else throw new Error('Error eliminando mascota');
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json();
            throw new Error(error)
        } else throw new Error('Token Error')
    })()
}

export default deletePet