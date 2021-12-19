function unregisterUser(token, password) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    return (async () => {

        const removeUser = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            method: 'DELETE',
            hesders: { 'Authorization': `Bearer ${token}` }
        })
        if (removeUser.status === 200) {
            const deleteResult = await removeUser.json();
            return deleteResult;
        } else if (removeUser.status === 401 || removeUser.status === 404) {
            const { error } = await removeUser.json();
            throw new Error(error)
        } else throw new Error('Error eliminando Cliente')


    })()
}



export default unregisterUser