

function retrieveUser(token) {
    
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/`, {
            method:'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const { status } = res

        if (status === 200) {
            return await res.json()
        } else if (status === 401 || status === 404) {
            const { error } = res.json()
            if('jwt expired'===error){
                delete sessionStorage.token
            }
            throw new Error(error)
        } else throw new Error('unknow error')
    })()
}

export default retrieveUser

    