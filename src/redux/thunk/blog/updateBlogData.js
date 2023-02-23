import { updateBlogAction } from "../../actions/blogAction"

const updateBlogData = (blog, id) => {
    console.log(blog, "bloggggg")
    return async (dispatch) => {
        const res = await fetch(`https://my-blog-acc-assignment1-server.vercel.app/blogs/${id}`, {
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
