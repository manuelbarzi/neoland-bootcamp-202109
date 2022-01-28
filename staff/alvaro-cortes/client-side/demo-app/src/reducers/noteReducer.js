export const noteReducer = (state = [], action) => {

    if (action.type === '@notes/init') {

        return action.payload
    }

    if (action.type === '@notes/created') {

        return [ ...state, action.payload]
    }

    if (action.type === '@notes/removed') {

        state.text.splice(action.payload.indice, 1)

        return state
    }

    return state
}

export const createNote = (notes, id) => {
    return {
        type: '@notes/created',
        payload: {
            text: notes,
            id
        }
    }
}

export const removeNote = (text, id, indice) => {
    return {
        type: '@notes/removed',
        payload: {
            text,
            id,
            indice
        }
    }
}

export const initNotes = notes => {
    return {
        type: '@notes/init',
        payload: notes
    }
}