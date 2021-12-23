import context from './context'

function setMessageToRead(token, id){ 
    return( async () => {

        const res = await fetch(`${context.API_URL}/messages`,
        {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })

        const {status} = res

        if (status === 204)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default setMessageToRead
