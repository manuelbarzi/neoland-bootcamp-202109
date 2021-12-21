const deleteWeigths = (token, petId) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        if (res.status === 200) {
            const removeWeigths = await fetch("http://localhost:8000/weigth?petId="+petId, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            if (removeWeigths.status === 200) {
                const deleteResult = await removeWeigths.json();
                return deleteResult;
            } else if (removeWeigths.status === 401 || removeWeigths.status === 404) {
                const { error } = await removeWeigths.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Notas');
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json();
            throw new Error(error)
        } else throw new Error('Token Error')
    })()
}

export default deleteWeigths