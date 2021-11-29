const {modifyUser} =require('users')
const jwt =require('jsonwebtoken')
const {env: {SECRET}} = process
const handelError = require('./helpers/handle-error')

module.exports = (req, res) =>{
    const { headers:  {authorization}, body : data} = req
try {
    const[, token] = authorization.split('')
    const{sub:id} = jwt.verify(token,SECRET)

    modifyUser(id, data)
        .then(()=> res.status(204).send())
        .catch(error => handelError(error,res))
} catch (error) {
    handelError(error,res)
}
}
