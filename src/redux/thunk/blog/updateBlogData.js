import { updateBlogAction } from "../../actions/blogAction"

const updateBlogData = (blog, id) => {
    console.log(blog, "bloggggg")
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = res.json()
        console.log("update", data)
        if (data.acknowledged) {
            dispatch(updateBlogAction(blog))
        }
    }
}

export default updateBlogData;
