module.exports = {
    registerUser: require('./register-user'),
    authenticateUser:require('./authenticate-user'),
    retrieveUser:require('./retrieve-user'),
    modifyUser:require('./modify-user'),
    addNote:require('./add-note'),
    deleteNote:require('./delete-note'),
    addTreatment:require('./add-treatment'),
    deleteTreatment:require('./delete-treatment'),
    addDiary:require('./add-diary'),
    addDisorder:require('./add-disorder'),
    retrieveNotes:require('./retrieve-notes'),
    retrieveTreatment:require('./retrieve-treatment'),
    retrieveDiary:require('./retrieve-diary'),
    retrieveDisorder:require('./retrieve-disorder'),
    unregisterUser:require('./unregister-user')
}