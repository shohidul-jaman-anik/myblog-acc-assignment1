import { TOGGLE_TAGS } from "../actionTypes/actionTypes"

export const initialState = {
    tags: []
}
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAGS:
            if (!state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: [...state.tags, action.payload]
                }
            } else {
                return {
                    ...state,
                    tags: state.tags.filter(t => t !== action.payload)
                }
            }
        default:
            return state;
    }
}

