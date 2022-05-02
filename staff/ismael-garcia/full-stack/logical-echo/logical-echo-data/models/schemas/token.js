const { Schema } = require("mongoose")
const { Types: { ObjectId } } = Schema

const token = new Schema({
	user_id: {
		type: ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { 
        type: String, 
        required: true 
    },
	created_at: { 
        type: Date, 
        default: Date.now, 
        expires: 3600 
    }
})

module.exports = token