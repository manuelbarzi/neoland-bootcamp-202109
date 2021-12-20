
function registerUser(name, username, email, password) {
    if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if (!name.trim().length) throw new Error('name is empty or blank')
    if (name.trim() !== name) throw new Error('blank spaces around name')

    if (typeof username !== 'string') throw new TypeError(username + ' is not a string')
    if (!username.trim().length) throw new Error('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new Error('username has blank spaces')
    if (username.length < 4) throw new Error('username has less than 4 characters')

    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!email.trim().length) throw new Error('email is empty or blank')
    if (email.trim() !== email) throw new Error('blank spaces around email')
    if (!/\w*@\w*\.\w{2,3}$/g.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)
    if (!password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('password has blank spaces')
    if (password.length < 6) throw new Error('password has less than 6 characters')

    return (async () => {

   const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
       method: 'POST' ,
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({name,username,email,password})
   })

    const { status } = res

    if (status === 201)
    return

    else if ( status === 409 || status === 400){
        const { error } = await res.json()

        throw new Error(error)
    } else throw new Error('unknown error')
})()

}

export default registerUser
