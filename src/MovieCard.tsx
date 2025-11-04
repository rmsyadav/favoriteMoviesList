import { useNavigate } from 'react-router-dom';
import './MovieCard.css'
export interface Cast {
  id: string;
  movie_id: number;
  name: string;
  original_name: string;
  popularity: string;
  profile_path: string;
  character: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface Movie {
  id: string;
  movie_id: number;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: number;
  created_at: string | null;
  updated_at: string | null;
  casts: Cast[];
}

const MovieCard = (props: Movie):JSX.Element => {
  const { original_title, overview, poster_path, release_date,} = props;
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie-details-page/${props.movie_id}`, {state: { movie: props }})}>
        <h2>{original_title}</h2>
        <div className='image-card'>
        <img src={poster_path} alt={original_title} className='image-movie' />
        </div>
        <p title={overview} className='movie-title'>{overview}</p>
        <p>Release Date: {release_date}</p>
    </div>
  )
}
export default MovieCard;