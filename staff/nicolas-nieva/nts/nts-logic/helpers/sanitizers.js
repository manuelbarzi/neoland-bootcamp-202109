function sanitizeUser(user) {
    user.id = user._id.toString()

    delete user._id
        
    delete user.password

    delete user.__v
}

function sanitizeReservation(reservation) {
    reservation.id = reservation._id.toString()

    delete reservation._id

    delete reservation.__v

    delete reservation.agency

    reservation.notes.forEach(sanitizeNote)
}

function sanitizeNote(note) {
    note.id = note._id.toString()

    delete note._id

    delete note.__v
}

module.exports = {
    sanitizeUser,
    sanitizeReservation,
    sanitizeNote
}