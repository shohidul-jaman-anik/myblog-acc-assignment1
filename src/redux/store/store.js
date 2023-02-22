import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { blogReducer } from "../reducers/blogReducer";
import { filterReducer } from "../reducers/filterReducer";
// import rootReducer from "../root/rootReducer";
import thunk from "redux-thunk";

const store = createStore(filterReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
