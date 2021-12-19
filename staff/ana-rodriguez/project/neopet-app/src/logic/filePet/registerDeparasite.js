const registerDeparasite = (token, deparasite) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            // deparasite
            const postDeparasite = await fetch("http://localhost:8000/deparasite/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deparasite)
            });
            if (postDeparasite.status === 201) {
                const newDeparasite = await postDeparasite.json();
                return newDeparasite;
            } else if (postDeparasite.status === 401 || postDeparasite.status === 404) {
                const {
                    error
                } = await postDeparasite.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Desparasitación');
        } else if (res.status === 401 || res.status === 404) {
            const {
                error
            } = await res.json();

            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default registerDeparasite