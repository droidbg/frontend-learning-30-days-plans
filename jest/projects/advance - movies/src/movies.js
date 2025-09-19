// movies.js

// Sample movies database
const movies = [
    { id: 1, title: "Inception", rating: 8.8, genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", rating: 9.0, genre: "Action" },
    { id: 3, title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
    { id: 4, title: "Tenet", rating: 7.5, genre: "Thriller" },
  ];
  
  // Get all movies
  function getAllMovies() {
    return movies;
  }
  
  // Find by ID
  function getMovieById(id) {
    return movies.find((m) => m.id === id) || null;
  }
  
  // Search by genre
  function getMoviesByGenre(genre) {
    return movies.filter((m) => m.genre.toLowerCase() === genre.toLowerCase());
  }
  
  // Calculate average rating
  function getAverageRating() {
    if (movies.length === 0) return 0;
    const sum = movies.reduce((acc, m) => acc + m.rating, 0);
    return parseFloat((sum / movies.length).toFixed(2));
  }
  
  // Add new movie
  function addMovie(newMovie) {
    if (!newMovie.title || !newMovie.rating || !newMovie.genre) {
      throw new Error("Invalid movie data");
    }
    const id = movies.length + 1;
    const movie = { id, ...newMovie };
    movies.push(movie);
    return movie;
  }
  
  module.exports = {
    getAllMovies,
    getMovieById,
    getMoviesByGenre,
    getAverageRating,
    addMovie,
  };
  