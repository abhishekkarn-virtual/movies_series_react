import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "./service";

export const getMoviesAction=createAsyncThunk("movies/getAction",async(_,{rejectWithValue})=>{

 try{
        const data =await getMovies();
        return data;
    }catch(err){
        return rejectWithValue(err);
    }
})

const initialState={
    isPending:false
}

 const MoviesReducer=createSlice({
    name:"movies",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(getMoviesAction.pending,(state)=>{
            return {
                isPending:true,
            }
        });

        builder.addCase(getMoviesAction.fulfilled,(state,{payload})=>{
            console.log(payload);
            return {
                resource :{...payload}
            }
        });

        builder.addCase(getMoviesAction.rejected,()=>{
           return{
            errorMessage: "Some error "
           }
        })
    }
})

export default MoviesReducer.reducer;