import { loadBlogAction } from "../../actions/blogAction"

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://my-blog-acc-assignment1-server.vercel.app/blogs")
        const data = res.json()
        console.log("dataaa", data.data)
        if (data.data.length) {
            dispatch(loadBlogAction(data.data))
        }
    }
}

export default loadBlogData;