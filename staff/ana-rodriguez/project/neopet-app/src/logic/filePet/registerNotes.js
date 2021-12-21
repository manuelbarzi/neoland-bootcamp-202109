const registerNotes = (token, note) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            const postNotes = await fetch("http://localhost:8000/notes/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });
            if (postNotes.status === 201) {
                const newNotes = await postNotes.json();
                return newNotes;
            } else if (postNotes.status === 401 || postNotes.status === 404) {
                const {
                    error
                } = await postNotes.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Notas');
        } else if (res.status === 401 || res.status === 404) {
            const {
                error
            } = await res.json();

            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default registerNotes