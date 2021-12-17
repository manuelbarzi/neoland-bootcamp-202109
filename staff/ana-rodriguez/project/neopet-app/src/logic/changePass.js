
function changePass(token, oldpassword, password) {
    
    if (!password.length) throw new Error('password is empty')
    if (!token) throw new Error('invalid token')
    
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest

        const passChan = {
            oldPassword: oldpassword,
            password: password
        }



        xhr.onload = function () {
            const status = xhr.status

            if (status === 401) reject('password wrong')
            else if (status === 404) reject('page not found')
            else if (status === 400) reject('wrong credential')
            else if (status === 204)resolve()
        }

        xhr.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users")
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(passChan))
    })
}

export default changePass
