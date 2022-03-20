import { configureStore } from "@reduxjs/toolkit"

import MoviesReducer from "../views/Movies/state/reducer"
import SeriesReducer from "../views/Series/state/reducer"

export const store =configureStore({
    reducer:{
        movies:MoviesReducer,
        series:SeriesReducer
    }
})