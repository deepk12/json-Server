import { legacy_createStore,applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from '../reducer'

const initialState={};

const Middleware=[thunk];

const store = legacy_createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...Middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;








// import { configureStore } from "@reduxjs/toolkit";
 
// import reducer from "../reducer/reducers";
 
// const store = configureStore({
//     reducer: reducer,
//     // other
// })
 
// export default store
