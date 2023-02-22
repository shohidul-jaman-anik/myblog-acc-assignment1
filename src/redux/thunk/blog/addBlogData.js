import { addBlogAction } from "../../actions/blogAction"

const addBlogData = (blog) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        const data = res.json()
      console.log("hello",data)
        if (data.acknowledged) {
            dispatch(addBlogAction({
                _id: data.insertedId,
                ...blog
            }))
        }
    }
}
export default addBlogData;