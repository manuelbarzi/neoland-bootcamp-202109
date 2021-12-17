function unregisterUser(token,password,callback) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)
    return new Promise((resolve, reject) => {


        const xhr = new XMLHttpRequest
        const pass = {
            password: password
        }

        xhr.onload = function () {

            const status = xhr.status

            if (status === 401) callback(new Error('password wrong'))
            else if (status === 404) callback(new Error('page not found'))
            else if (status === 400) callback(new Error('wrong credential'))
            else if (status === 204) callback()
        }

        xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(pass))

    })
}



export default unregisterUser