function addNote(content, date) {
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content, date})
        })

        const { status } = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default addNote