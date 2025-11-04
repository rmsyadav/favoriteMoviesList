import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Movie } from './MovieCard';

interface MovieState {
  movies: Movie[];
  movie: Movie;
  isLoading: boolean;
}

const initialState: MovieState = {
  movies: [],
  movie: {} as Movie,
  isLoading: false,
};



export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('http://localhost:8081/api/movies');
  const data = await response.json();
  return data;
}); 

const movieSlice = createSlice ({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovieById: (state, action: { payload: string | undefined }) => {
      state.isLoading = true;
    },
    fetchMovieByIdSuccess: (state, action) => {
      state.movie = action.payload;
      state.isLoading = false;
    },
    fetchMovieByIdFailure: (state) => {
      state.isLoading = false;
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.data;
    }).addCase(fetchMovies.rejected, (state)=>{
        state.movies = [];
    })
  }
});

export const { fetchMovieById, fetchMovieByIdSuccess, fetchMovieByIdFailure } = movieSlice.actions;
export default movieSlice.reducer;
