import { ADD_DATA, LOAD_DATA, READING_HISTORY } from "../actionTypes/actionTypes"

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
