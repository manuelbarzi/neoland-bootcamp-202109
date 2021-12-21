const deleteVaccines = (token, petId) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        if (res.status === 200) {
            const removeVaccines = await fetch("http://localhost:8000/vaccines?petId="+petId, {
                method: 'DELETE'
            });
            if (removeVaccines.status === 200) {
                const deleteResult = await removeVaccines.json();
                return deleteResult;
            } else if (removeVaccines.status === 401 || removeVaccines.status === 404) {
                const { error } = await removeVaccines.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Notas');
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json();
            throw new Error(error)
        } else throw new Error('Token Error')
    })()
}

export default deleteVaccines