import { useEffect, useState } from "react";
import MovieCard, { Movie } from "./MovieCard";
import "./MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./movieReducer";
import { AppDispatch, RootState } from "./store";
export const dummyMovies: Movie[] = [
  {
    id: "1",
    movie_id: 101,
    original_title: "Showgirls",
    original_language: "en",
    overview:
      "A young drifter named Nomi arrives in Las Vegas to become a dancer...",
    popularity: 24.11,
    poster_path:
      "https://image.tmdb.org/t/p/original/atjtGFIIt9QMGf9ELyboq5cl466.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/cIXSZnfdRV5xh9bs4Cnv3OryGS2.jpg",
    release_date: "Fri, 09/22/1995",
    vote_average: 5.5,
    vote_count: 1108,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: [
      {
        id: "c1",
        movie_id: 101,
        name: "Paul Bates",
        original_name: "Paul Bates",
        popularity: "9.564",
        profile_path:
          "https://image.tmdb.org/t/p/original/cvHI8cb5vKjqaigqwljpsERsv8R.jpg",
        character: "Bouncer at Cheetah",
        created_at: null,
        updated_at: null,
      },
    ],
  },
  {
    id: "2",
    movie_id: 102,
    original_title: "The Matrix",
    original_language: "en",
    overview:
      "A computer hacker learns about the true nature of his reality...",
    popularity: 80.5,
    poster_path:
      "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/9pkZesKMnblFfKxEhQx45YQ2kIe.jpg",
    release_date: "Fri, 03/31/1999",
    vote_average: 8.7,
    vote_count: 20000,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: [
      {
        id: "c2",
        movie_id: 102,
        name: "Keanu Reeves",
        original_name: "Keanu Reeves",
        popularity: "95.0",
        profile_path:
          "https://image.tmdb.org/t/p/original/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
        character: "Neo",
        created_at: null,
        updated_at: null,
      },
    ],
  },
  {
    id: "3",
    movie_id: 103,
    original_title: "Inception",
    original_language: "en",
    overview:
      "A thief who steals corporate secrets through dream-sharing technology...",
    popularity: 90.2,
    poster_path:
      "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "Fri, 07/16/2010",
    vote_average: 8.8,
    vote_count: 25000,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: [
      {
        id: "c3",
        movie_id: 103,
        name: "Leonardo DiCaprio",
        original_name: "Leonardo DiCaprio",
        popularity: "98.0",
        profile_path:
          "https://image.tmdb.org/t/p/original/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
        character: "Cobb",
        created_at: null,
        updated_at: null,
      },
    ],
  },
  {
    id: "4",
    movie_id: 104,
    original_title: "Interstellar",
    original_language: "en",
    overview: "A team of explorers travel through a wormhole in space...",
    popularity: 85.7,
    poster_path:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    release_date: "Fri, 11/07/2014",
    vote_average: 8.6,
    vote_count: 18000,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: [
      {
        id: "c4",
        movie_id: 104,
        name: "Matthew McConaughey",
        original_name: "Matthew McConaughey",
        popularity: "90.0",
        profile_path:
          "https://image.tmdb.org/t/p/original/2v9FVVBUrrkW2m3F7S7yld9zYbA.jpg",
        character: "Cooper",
        created_at: null,
        updated_at: null,
      },
    ],
  },
  {
    id: "5",
    movie_id: 105,
    original_title: "The Godfather",
    original_language: "en",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control...",
    popularity: 70.3,
    poster_path:
      "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    release_date: "Fri, 03/24/1972",
    vote_average: 9.2,
    vote_count: 16000,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: [
      {
        id: "c5",
        movie_id: 105,
        name: "Marlon Brando",
        original_name: "Marlon Brando",
        popularity: "85.0",
        profile_path:
          "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        character: "Don Vito Corleone",
        created_at: null,
        updated_at: null,
      },
    ],
  },
];

const MovieList = () => {
 const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 900,
          padding: "12px 0",
          color: "#222",
          marginTop: "45px",
          letterSpacing: "2px",
          textShadow: "0 4px 16px rgba(0,0,0,0.18), 0 1.5px 0 #fff",
        }}
      >
        Movie List
      </h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <MovieCard {...movie}></MovieCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
