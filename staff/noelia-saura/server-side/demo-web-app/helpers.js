function getUserId(cookie) {
    debugger
    let res = null
    if(cookie){
        const [, id] = cookie.split('=')
        res=id
    }
    return res
}
module.exports = {
    getUserId
}