const { model } = require('mongoose')
const { user,note,emotional,medication } = require('./schemas')

module.exports = {
    User: model('User', user),
    Note: model('Note',note),
    Emotional: model('Emotional',emotional),
    Medication: model('Medication', medication)
}