/**
 * Signs up a user in the application.
 * 
 * @param {string} name The full name of the user to be registered.
 * @param {string} username The username of the user to be registered.
 * @param {string} password The password of the user to be registered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
 function signupUser(user, callback) {
    debugger
    if (typeof user.name !== 'string') throw new TypeError(user.name + ' is not a string')
    if (!user.name.trim().length) throw new Error('name is empty or blank')
    if (user.name.trim() !== user.name) throw new Error('blank spaces around name')

    if (typeof user.username !== 'string') throw new TypeError(user.username + ' is not a string')
    if (!user.username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(user.username)) throw new Error('username has blank spaces')
    if (user.username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof user.password !== 'string') throw new TypeError(`${user.password} is not a string`)
    if (!user.password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(user.password)) throw new Error('password has blank spaces')
    if (user.password.length < 6) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 409 || status === 400) {
            const response = JSON.parse(responseText)

            const message = response.error

            callback(new Error(message))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', `${process.env.REACT_APP_API_URL}/users`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = user

    xhr.send(JSON.stringify(body))
}

export default signupUser