import { removeBlogAction } from "../../actions/blogAction"

const deleteBlogData = (id) => {
    return async (dispatch) => {
        const res = await fetch(`https://my-blog-acc-assignment1-server.vercel.app/blogs/${id}`, {
            method: "Delete",
            headers: {
                "Content-type": "application/json"
            },
        })
        const data = res.json()
        console.log("delete", data)
        if (data.acknowledged) {
            dispatch(removeBlogAction(id))
        }
    }
}

export default deleteBlogData;