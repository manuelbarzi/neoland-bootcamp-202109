
function changePass(token, oldpassword, password) {
    
    return (async() => {

        if (!oldpassword.length) throw new Error('password is empty')
        if (!password.length) throw new Error('password is empty')
        if (!token) throw new Error('invalid token')
        if (password === oldpassword) throw new Error('Wrong password')

       debugger;
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
            method:'PATCH',
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({oldPassword:oldpassword, password:password })
        })

        if (res.status === 204){
            const data = await res
            return data;
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else {
            debugger;
            throw new Error('Token Error')
        }
          
    })()
}

export default changePass
