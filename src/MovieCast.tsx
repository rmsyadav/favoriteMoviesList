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

const MovieCast = (props: Cast):JSX.Element => {
  const { original_name, character, profile_path, popularity } = props;
  return (
    <div className="movie-card">
        <h2>{original_name}</h2>
        <div className='image-card'>
        <img src={profile_path} alt={original_name} className='image-movie' />
        </div>
        <p className='movie-title'>{character}</p>
        <p>Popularity: {popularity}</p>
    </div>
  )
}
export default MovieCast;