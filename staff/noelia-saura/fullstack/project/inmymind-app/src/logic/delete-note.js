function deleteNote(token, noteId, callback) {
    // TODO validate arguments
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const { status, responseText } = res

        if (status === 400 || status === 401) {
            const response = JSON.parse(responseText)

            const message = response.error

            if('jwt expired'=== message){
                delete sessionStorage.token
            }

            callback(new Error(message))
        } 
    })()
}

export default deleteNote