// server.js
const express = require("express");
const app = express();

app.use(express.json());

// In-memory movie "database"
let movies = [
  { id: 1, title: "Inception", rating: 8.8, genre: "Sci-Fi" },
  { id: 2, title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { id: 3, title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
];

// Get all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Get movie by ID
app.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  res.json(movie);
});

// Add new movie
app.post("/movies", (req, res) => {
  const { title, rating, genre } = req.body;
  if (!title || !rating || !genre) {
    return res.status(400).json({ error: "Invalid movie data" });
  }
  const newMovie = { id: movies.length + 1, title, rating, genre };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Delete movie
app.delete("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return res.status(404).json({ error: "Movie not found" });
  const removed = movies.splice(index, 1);
  res.json(removed[0]);
});

module.exports = app;
