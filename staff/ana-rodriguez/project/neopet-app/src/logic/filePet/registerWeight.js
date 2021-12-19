const registerWeight = (token, weigth) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {

            // weigth
            const postWeigth = await fetch("http://localhost:8000/weigth/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(weigth)
            });
            if (postWeigth.status === 201) {
                const newWeight = await postWeigth.json();
                return newWeight;

            } else if (postWeigth.status === 401 || postWeigth.status === 404) {
                const {
                    error
                } = await postWeigth.json();
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

export default registerWeight