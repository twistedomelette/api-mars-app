import {combineReducers, configureStore} from "@reduxjs/toolkit";
import marsSlice from "./slice";


const rootReducer = combineReducers({
    mars: marsSlice
})

export const store = configureStore({
    reducer: rootReducer
})