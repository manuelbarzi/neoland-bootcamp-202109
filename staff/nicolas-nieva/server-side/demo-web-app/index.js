const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const { registerUser, authenticateUser, retrieveUser, modifyUser, unregisterUser } = require('users')
const {landing, home, signUp, signIn, modifyPassword, modifyData, unregisterU, fail, postSignUp} = require ('./components')

const server = express()

function getUserId (cookie){
    let res = null
    if (cookie) {
    const [, id] =  cookie.split('=') 
    res = id    
}
    return res
} 

server.use(express.static('public')) // middleware

server.get ('/', (req,res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie) 
    if (id) {
        retrieveUser (id, (error, user) =>{
            if (error){ 
                return res.send(landing())
            }else {
                return res.send(home (user))
                
            }
        })
    }else  res.send(landing())
})




server.get('/signup', (req, res) => { // http://localhost:8000/signup
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    res.send(signUp ())
})

server.post('/signup', formBodyParser, (req, res) => {
    //const name = req.body.name
    //const username = req.body.username
    // const password = req.body.password
    const { body: { name, username, password } } = req
    

    try{
    registerUser(name, username, password, function (error) {
        if (error) {
            res.send(fail ({feeedback: error.message}))

            return
        }

        res.send(postSignUp())
    })}catch (error) {
       return res.send (signUp ({name, username, feedback: error.message}))        
    }
})

server.get('/signin', (req, res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    res.send(signIn ())
})

server.post('/signin', formBodyParser, (req, res) => {
    const { body: { username, password } } = req
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    try{
    authenticateUser(username, password, (error, id) => {
        if (error)
            return res.send(signIn ({username, feedback: error.message} ))

        res.setHeader('Set-Cookie', `user-id=${id}`) //Max-Age=3600

        res.redirect('/')
    })}catch(error){
        return res.send (signIn ({username, feedback: error.message} ))
    }

    
})

server.get ('/modify-password', (req, res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    res.send (modifyPassword())
})

server.post ("/modify-password", formBodyParser, (req, res) =>{
    const { body: { oldPassword, newPassword } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split ('=')
    try{
    modifyUser(id, ".", ".", oldPassword, newPassword, error => {
        if (error) return res.send(modifyPassword ({feedback: message.error}))

        res.send(modifyPassword ({feedback: 'password modified'}))
    })}catch (error){
        return res.send(modifyPassword ({feedback: message.error}))
    }
})

server.get ('/changedata', (req,res) => {
    res.send (modifyData())
})

server.post('/changedata', formBodyParser, (req,res) => {
    const { body: { name, username } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')
    try{
    modifyUser(id, name, username, ".", ".", error => {
        if (error) return res.send (modifyData ({feedback:error.message}))

        else if (name === "" && username === "")
        res.send(modifyData ({feedback:'empty spaces'}))

        else
        res.send (modifyData ({feedback: 'datos cambiados'}))

    })}catch(error){
        return res.send (modifyData ({feedback:error.message}))
    }
})

server.get ('/unregister', (req, res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    res.send (unregisterU())
})

server.post ("/unregister", formBodyParser, (req, res) =>{
    const { body: { password } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split ('=')
    try{
    unregisterUser(id, password, error => {
        if (error) return res.send(unregisterU ({feedback: message.error}))

        res.setHeader("Set-Cookie", "user-id=null; Max-Age=0")
        res.redirect ('/')
    })}catch (error){
        return res.send(unregisterU ({feedback: message.error}))
    }
})

server.post ("/sign-out", (req, res) =>{
    res.setHeader("Set-Cookie", "user-id=null; Max-Age=0")
        res.redirect ('/')
})

server.listen(8000, () => {
    console.log ('Server listen on port 8000.')
})
