require('dotenv').config()

const retrieveMessages = require('./retrieve-messages')
const { mongoose, models: { User } } = require('mynutrition-data')

const { env: { MONGO_URL } } = process

    ; (async () => {
        try {
            await mongoose.connect(MONGO_URL)

            const messages = await retrieveMessages('61bcd0f60c2e5dc747094d1c') // carla
            //const messages = await retrieveMessages('61bcd8863b17a25795784a53') // andreu

            await mongoose.disconnect()
        } catch (error) {
            console.error(error)
        }
    })()