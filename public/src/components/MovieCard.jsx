import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favorite from "../assets/Favorite.png";
import axios from "axios";
import Imbd from "../assets/imdblogo.png";
import Rotten from "../assets/rotten.png";

function MovieCard({ movie }) {
  // State to track whether the movie is in favorites
  const [isFavorite, setIsFavorite] = useState(false);

  // State to store the movie's genre, IMDb percentage, Rotten Tomatoes percentage, and formatted release year
  const [genre, setGenre] = useState("");
  const [imdbPercentage, setImdbPercentage] = useState("");
  const [rottenPercentage, setRottenPercentage] = useState("");
  const [formattedReleaseYear, setFormattedReleaseYear] = useState("");

  // useEffect to fetch data and update states
  useEffect(() => {
    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Check if the movie is in favorites
    setIsFavorite(favorites.includes(movie.id));

    // Fetch genre data for the movie using The Movie Database API
    const apiKey = "fa1fbc363d7b2efec8116bf8eae0ebd7";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`)
      .then((response) => {
        // Extract the genre names from the response and join them into a string
        const genreNames = response.data.genres
          .map((genre) => genre.name)
          .join(", ");
        setGenre(genreNames);

        // Format the release year
        const formattedDate = formatToUTCYear(response.data.release_date);
        setFormattedReleaseYear(formattedDate);
      })
      .catch((error) => {
        console.error("Error fetching genre data:", error);
      });

    // Generate random percentages for IMDb and Rotten Tomatoes
    setImdbPercentage(getRandomPercentage());
    setRottenPercentage(getRandomPercentage());
  }, [movie.id]);

  // Function to generate a random percentage between 50 and 100
  function getRandomPercentage() {
    const randomPercentage = Math.floor(Math.random() * 51) + 50; // Generates a random number between 50 and 100
    return `${randomPercentage}%`;
  }

  // Function to format a date string to its UTC year
  const formatToUTCYear = (dateString) => {
    const localDate = new Date(dateString);
    const utcYear = localDate.getUTCFullYear();
    return utcYear.toString();
  };

  // Function to toggle a movie as a favorite
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Remove the movie from favorites
      const updatedFavorites = favorites.filter((id) => id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add the movie to favorites
      favorites.push(movie.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    // Update the isFavorite state
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="decoration-none"
      onClick={(e) => {
        // Prevent the link from navigating if the favorite icon is clicked
        if (e.target.closest(".favorite-icon")) {
          e.preventDefault();
          toggleFavorite();
        }
      }}
    >
      <div className="movie-card relative" data-testid="movie-card">
        <img
          src={Favorite}
          alt="Favorite Icon"
          className="favorite-icon text-white bg-transparent absolute left-60 cursor-pointer"
        />
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          data-testid="movie-poster"
          className="h-96 w-full mt-0"
        />
        <p
          data-testid="movie-release-date"
          className="text-gray-200 text-base font-bold mt-4 text-left"
        >
          USA, {formattedReleaseYear}
        </p>
        <h2
          className="text-lg text-left my-2 font-semibold text-textMain flex-wrap"
          data-testid="movie-title"
        >
          {movie.title}
        </h2>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-start w-1/2 text-xs">
            <img src={Imbd} alt="" className="h-3 w-7 mr-2" />
            <span className="text-base">{imdbPercentage} / 100</span>
          </div>
          <div className="flex items-center justify-end w-2/4 text-xs">
            <img src={Rotten} alt="" className="h-4 mx-2" />
            <span className="text-base">{rottenPercentage}</span>
          </div>
        </div>

        <p
          className="text-textMinor text-base text-left"
          data-testid="movie-genre"
        >
          <p className="font-bold">{genre}</p>
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
