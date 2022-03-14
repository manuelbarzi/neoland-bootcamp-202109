function removeComment(token, id, comment) {
    if (typeof token !== "string") throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error("Invalid token")

    if (typeof id !== "string") throw new TypeError(`${id} is not a string`)
    if (!id.trim().length) throw new Error("id is empty or blank.")

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

            const indexC = comments.findIndex(item => item.id === id)

            const items = comments[indexC]

            const itemTexts = items.text

            const item = itemTexts.filter(texto => texto === comment)

            if (item == comment) {

                const index = itemTexts.indexOf(comment)

                if (itemTexts.length === 1) {
                    comments.splice(indexC, 1)
                }

                itemTexts.splice(index, 1)
            }

            const res2 = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comments })
            })

            const { status } = res2

            if (status === 400 || status === 401) {
                const { error } = await res2.json()

                throw new Error(error)
            } else if (status === 204) {
                return
            }
        }
    })()
}

export default removeComment