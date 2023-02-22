import { loadBlogAction } from "../../actions/blogAction"

const loadBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs")
        const data = res.json()

        if (data.data.length) {
            dispatch(loadBlogAction(blog))
        }
    }
}

export default loadBlogData;