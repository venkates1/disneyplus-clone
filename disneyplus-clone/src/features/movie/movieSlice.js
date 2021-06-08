import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend:null,
    new:null,
    trending:null,
    original:null
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state, action) => {
            state.recommend = action.payload.recommend;
            state.new= action.payload.new;
            state.trending = action.payload.trending;
            state.original = action.payload.original;
        }

    }
})

export const { setMovies } = movieSlice.actions;

export const selectRecommend  = (state) => state.movie.recommend;
export const selectNew  = (state) => state.movie.new;
export const selectOriginal  = (state) => state.movie.original;
export const selectTrending  = (state) => state.movie.trending;

export default movieSlice.reducer;