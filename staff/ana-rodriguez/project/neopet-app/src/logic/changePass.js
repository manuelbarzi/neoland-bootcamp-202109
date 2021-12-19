
function changePass(token, oldpassword, password) {
    
    return (async() => {

        if(!oldpassword.length) throw new Error('password is empty')
        if (!password.length) throw new Error('password is empty')
        if (!token) throw new Error('invalid token')
       
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
            method:'PATCH',
            headers:{
                'Authorization': `Bearer ${token}`,'Content-Type': 'application/json'
            }
        })
        if (res.status === 200){

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json();
            throw new Error(error)
        } else throw new Error('Token Error')
          
    })()
}

export default changePass
