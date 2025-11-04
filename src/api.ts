import axios, { AxiosResponse } from "axios";


const fetchMovieByIdFromApi = async (id: string | undefined): Promise<AxiosResponse<any>> => {
  return axios.get(`http://localhost:8081/api/movies/${id}`).then((response) => {
    return response.data;
  }).catch((error) => {
    console.error("Error fetching movies:", error);
    throw error;
  });
}

const fetchWatchedMoviesFromApi = async (): Promise<AxiosResponse<any>> => {
  return axios.get('http://localhost:8081/api/movies?watched=true').then((response) => {
    return response.data;
  }).catch((error) => {
    console.error("Error fetching watched movies:", error);
    throw error;
  });
}
export { fetchMovieByIdFromApi, fetchWatchedMoviesFromApi };