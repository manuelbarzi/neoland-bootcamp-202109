const { registerUser } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: { name, username, email, password } } = req 

    try {
        await registerUser(name, username, email, password)

        // const user = User.findOne({ email })

        // const token = await new Token({
        //     user_id: user._id,
        //     token: crypto.randomBytes(32).toString("hex")
        // }).save()

        // const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`

        // await sendEmail(user.email, "Verify Email", url)
        
        res.status(201).send()
    } catch (error) {
        handleError(error, res)
    }
}