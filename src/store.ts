import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import createSagaMiddleware from "redux-saga";
import fetchWatchedMoviesSaga from "./movieSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(fetchWatchedMoviesSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;