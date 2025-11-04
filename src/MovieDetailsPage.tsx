import { Link, useParams } from "react-router-dom";
import './MovieDetailsPage.css'
import MovieCast from "./MovieCast";
import { Cast } from "./MovieCard";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect } from "react";
import { fetchMovieById } from "./movieReducer";

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { movie } = useSelector((state: RootState) => state.movies);

  useEffect(()=>{
    dispatch(fetchMovieById(id));
  }, [dispatch, id])
  return (
    <div style={{marginTop: '80px', textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Movie Details Page</h1>
      <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '500px 500px', justifyItems: 'start', gap: '20px'}}>
        <div className="movie-card"><img className="image" src={movie.poster_path} alt="Movie Poster" /></div>
        <div className="right-contaner">
         <div className="movie-info">
          <h2>{movie.original_title}</h2>
          <p><strong>Language:</strong> {movie.original_language}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
          <p className="overview">{movie.overview}</p>
          <Link to={`/`} className="details-link" state={{ movie: movie }}>
            👉 Go to Movie List page
          </Link>
        </div>  
        </div>
      </div>
      <div className="movie-list" style={{maxWidth: '80%', marginTop: '40px', gap:'50px', marginBottom: '80px'}}>
        {movie.casts.map((cast: Cast) => (
          <div key={cast.id} className="card">
            <MovieCast {...cast}></MovieCast>
          </div>
        ))}
      </div>
      <footer style={{position:"fixed", bottom: 0, left: 0, right: 0, padding: '10px', background: '#f1f1f1', borderTop: '1px solid #ddd'}}>
        <p>&copy; 2023 Movie App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MovieDetailsPage;
