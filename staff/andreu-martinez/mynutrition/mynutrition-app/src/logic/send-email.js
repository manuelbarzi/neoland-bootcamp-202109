import context from './context'

function sendEmail(token, parentId, to, subject, body){ // date lo generamos aquí
    const date = null // todo
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dateFormat = year + '-' + month + '-' + day

    const from = "61b387fd746955ff5f1f9abb"

    return( async () => {
        const res = await fetch(`${context.API_URL}/messages`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({parentId, to, from, subject, body, dateFormat })
        })

        const {status} = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default sendEmail

//Aqui generamos la fecha de envio, 



// Necesitas un retrieveContacts que te envíe los datos básicos, id, name, y las 4 cosas tìpicas, no hace falta todo el object