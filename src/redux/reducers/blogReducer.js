import { ADD_DATA, LOAD_DATA, READING_HISTORY } from "../actionTypes/actionTypes"

export const initialState = {
    readHis: [],
    blogs: []
}
export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                blogs: action.payload
            }
        case ADD_DATA:
            return {
                ...state,
                blogs: [...state.blogs,action.payload]
            }
        case READING_HISTORY:
            return {
                ...state,
                readHis: [...state.readHis, action.payload]
            }
    }
}
