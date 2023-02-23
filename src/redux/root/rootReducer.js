// import { combineReducers } from "redux";
// import { blogReducer } from "../reducers/blogReducer";
// import { filterReducer } from "../reducers/filterReducer";


// const rootReducer = combineReducers({
//     blog: blogReducer,
//     toggle: filterReducer
// })

// export default rootReducer;

import { combineReducers } from "redux";
import { blogReducer } from "../reducers/blogReducer";
import { filterReducer } from "../reducers/filterReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    toggle:  filterReducer
})

export default rootReducer;
