function deleteTreatment(token, treatmentId, callback) {
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/treatments/${treatmentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ treatmentId })
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

export default deleteTreatment