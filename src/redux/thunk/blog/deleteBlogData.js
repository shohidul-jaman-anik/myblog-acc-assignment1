import { removeBlogAction } from "../../actions/blogAction"

const deleteBlogData = (id) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, {
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