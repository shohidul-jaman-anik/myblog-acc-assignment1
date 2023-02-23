import { TOGGLE_TAGS } from "../actionTypes/actionTypes"

export const toggleTag = (tags) => {
    // console.log("tags",tags)
    return {
        type: TOGGLE_TAGS,
        payload: tags
    }
}

