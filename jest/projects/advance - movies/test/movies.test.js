// movies.test.js
const {
    getAllMovies,
    getMovieById,
    getMoviesByGenre,
    getAverageRating,
    addMovie,
  } = require("../src/movies");
  
  describe("Movies Library", () => {
    test("should return all movies", () => {
      const all = getAllMovies();
      expect(all.length).toBeGreaterThan(0);
      expect(all[0]).toHaveProperty("title");
    });
  
    test("should find movie by ID", () => {
      const movie = getMovieById(1);
      expect(movie).toBeTruthy();
      expect(movie.title).toBe("Inception");
    });
  
    test("should return null if movie not found", () => {
      const movie = getMovieById(999);
      expect(movie).toBeNull();
    });
  
    test("should filter movies by genre", () => {
      const sciFiMovies = getMoviesByGenre("Sci-Fi");
      expect(sciFiMovies.length).toBe(2);
      expect(sciFiMovies.every((m) => m.genre === "Sci-Fi")).toBe(true);
    });
  
    test("should return average rating", () => {
      const avg = getAverageRating();
      expect(avg).toBeGreaterThan(0);
      expect(typeof avg).toBe("number");
    });
  
    test("should add a new valid movie", () => {
      const newMovie = { title: "Dunkirk", rating: 7.9, genre: "War" };
      const added = addMovie(newMovie);
      expect(added.id).toBeDefined();
      expect(added.title).toBe("Dunkirk");
  
      // Verify it's actually in the list
      const all = getAllMovies();
      expect(all).toContainEqual(added);
    });
  
    test("should throw error if movie data is invalid", () => {
      expect(() => addMovie({ title: "Invalid" })).toThrow("Invalid movie data");
    });
  });
  