import MoviesReducer from "../views/Movies/state/reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store =configureStore({
    reducer:{
        movies:MoviesReducer,
    }
})