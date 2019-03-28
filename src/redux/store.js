import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer.root";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

// use applyMiddleware to add the thunk middleware to the store
export const store = createStoreWithMiddleware(rootReducer);
