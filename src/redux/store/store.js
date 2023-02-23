import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { blogReducer } from "../reducers/blogReducer";
import { filterReducer } from "../reducers/filterReducer";
import thunk from "redux-thunk";
import rootReducer from "../root/rootReducer";

const store = createStore(filterReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;
