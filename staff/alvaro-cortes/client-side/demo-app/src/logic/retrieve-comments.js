function retrieveComment(token, id) {
    if (typeof token !== "string") throw new TypeError(token + " is not a string")
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res

        if (status === 401 || status === 404) {
            const { error } = await res.json()

            throw new Error(error)
        } else if (status === 200) {

            const user = await res.json()

            const { comments = [] } = user

            if (comments.length) {
                
                let texts = null

                comments.forEach((text) => {
                    if (text.id === id) texts = text
                })

                return texts
                
            } else return []
        } 
    })()
}

export default retrieveComment