import { ADD_DATA, LOAD_DATA, READING_HISTORY, REMOVE_DATA, SEARCH_DATA, SORTED_DATA, UPDATE_DATA } from "../actionTypes/actionTypes"

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
                blogs: [...state.blogs, action.payload]
            }
        case REMOVE_DATA:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }
        case UPDATE_DATA:
            const updateProduct = state.blogs.map(blog => {
                if (blog._id === action.payload) {
                    return [...blog, action.payload]
                } else {
                    return blog
                }
            })
            return {
                ...state,
                blogs: updateProduct
            }
        case SORTED_DATA:
            const sortedData = [...state.blogs].sort((a, b) => {
                if (action.payload === 'asc') {
                    return new Date(a.date) - new Date(b.date)
                } else if (action.payload === 'dese') {
                    return new Date(b.date) - new Date(a.date)
                } else {
                    return new Date(a.date) - new Date(b.date)
                }
            })
            console.log("sorted data", sortedData)
            return {
                ...state,
                blogs: sortedData
            }
        // case SEARCH_DATA:
        //     const searchText = action.payload
        //     const searchBlog = state.blogs.filter(blog => blog.title.toLowerCase().includes(searchText.toLowerCase()))
        //     return {
        //         ...state,
        //         blogs: searchBlog
        //     }
        // case READING_HISTORY:
        //     return {
        //         ...state,
        //         readHis: [...state.readHis, action.payload]
        //     }
        default:
            return state
    }
}
