import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSeries } from "./service";

export const getSeriesAction=createAsyncThunk("series/getAction",async(_,{rejectWithValue})=>{

 try{
        const data =await getSeries();
        return data;
    }catch(err){
        return rejectWithValue(err);
    }
})

const initialState={
    isPending:false
}

 const SeriesReducer=createSlice({
    name:"movies",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(getSeriesAction.pending,(state)=>{
            return {
                isPending:true,
            }
        });

        builder.addCase(getSeriesAction.fulfilled,(state,{payload})=>{
            console.log(payload);
            return {
                resource :[...payload]
            }
        });

        builder.addCase(getSeriesAction.rejected,()=>{
           return{
            errorMessage: "Some error "
           }
        })
    }
})

export default SeriesReducer.reducer;