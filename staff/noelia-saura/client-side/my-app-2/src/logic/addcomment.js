function addComment(token,id,callback){
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)

    const xhr = new XMLHttpRequest()
    xhr.onload=()=>{

    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}
export default addComment