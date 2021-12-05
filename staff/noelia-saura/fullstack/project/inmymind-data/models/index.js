const { model } = require('mongoose')
const { user,note,diary,disorder,treatment } = require('./schemas')

module.exports = {
    User: model('User', user),
    Note: model('Note',note),
    Diary: model('diary',diary),
    Treatment: model('treatment', treatment),
    Disorder:model('disorder', disorder)
}