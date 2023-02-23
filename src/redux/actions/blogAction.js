import { ADD_DATA, LOAD_DATA, READING_HISTORY, REMOVE_DATA, SEARCH_DATA, SORTED_DATA, UPDATE_DATA } from "../actionTypes/actionTypes"

export const readHistory = (blog) => {
   return {
      type: READING_HISTORY,
      payload: blog
   }
}

export const loadBlogAction = (data) => {
   return {
      type: LOAD_DATA,
      payload: data
   }
}
export const addBlogAction = (data) => {
   return {
      type: ADD_DATA,
      payload: data
   }
}
export const removeBlogAction = (id) => {
   return {
      type: REMOVE_DATA,
      payload: id
   }
}
export const updateBlogAction = (data) => {
   return {
      type: UPDATE_DATA,
      payload: data
   }
}
export const sortBlogAction = (data) => {
   return {
      type: SORTED_DATA,
      payload: data
   }
}
