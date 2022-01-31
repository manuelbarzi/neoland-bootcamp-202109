import { retrieveComment, addComent, removeComment } from '../logic';

export const noteReducer = (state = [], action) => {

    if (action.type === '@notes/init') {

        return action.payload
    }

    if (action.type === '@notes/created') {

        state.text.push(action.payload.text)

        return  { ...state, text: state.text }
    }

    if (action.type === '@notes/removed') {

        state.text.splice(action.payload.index, 1)

        return { ...state, text: state.text }
    }

    return state
}

export const createNote = (notes, id, token) => {
    return async (dispatch) => {
        await addComent(token, id, notes)

        dispatch({
            type: '@notes/created',
            payload: {
                text: notes,
                id
            }
        })
    }
}

export const removeNote = (notes, id, index, token) => {
    return async (dispatch) => {
        await removeComment(token, id, notes)

        dispatch({
            type: '@notes/removed',
            payload: {
                notes,
                id,
                index
            }
        })
    }
}

export const initNotes = (token, id) => {
    return async (dispatch) => {
        const notes1 = await retrieveComment(token, id)

        dispatch({
            type: '@notes/init',
            payload: notes1
        })
    }
}