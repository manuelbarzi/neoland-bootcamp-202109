

/**
 * TODO
 * 
 * @param {string} username 
 * @param {*} password 
 * @param {*} callback 
 */
const signinUser= (username, password)=>{
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        const { status } = res

        if (status === 200) {
            const { token } = await res.json()

            return token
        } else if (status === 401) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default signinUser