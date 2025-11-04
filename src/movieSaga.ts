import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchMovieByIdFromApi } from "./api";
import { fetchMovieById, fetchMovieByIdSuccess } from "./movieReducer";


function* fetchMovieSaga(action: { payload: string | undefined }): SagaIterator {
    try {
        const response = yield call(fetchMovieByIdFromApi, action.payload);
        yield put(fetchMovieByIdSuccess(response.data));
    } catch (error) {
        yield put({ type: "movies/fetchMovieByIdFailure", payload: error });
    }
}  

function* fetchWatchedMoviesSaga(): SagaIterator {

    yield takeLatest(fetchMovieById.type as any, fetchMovieSaga);
}

export default fetchWatchedMoviesSaga;