// server.test.js
const request = require("supertest");
const app = require("../src/server");
require("./customMatcher");

describe("Movies API", () => {
  test("GET /movies should return all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("GET /movies/:id should return a movie if found", async () => {
    const res = await request(app).get("/movies/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title", "Inception");
  });

  test("GET /movies/:id should return 404 if movie not found", async () => {
    const res = await request(app).get("/movies/999");
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("error", "Movie not found");
  });

  test("POST /movies should add a new movie", async () => {
    const newMovie = { title: "Dunkirk", rating: 7.9, genre: "War" };
    const res = await request(app).post("/movies").send(newMovie);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Dunkirk");

    // Verify it’s included in the list
    const all = await request(app).get("/movies");
    expect(all.body).toEqual(
      expect.arrayContaining([expect.objectContaining(newMovie)])
    );
  });

  test("POST /movies should return 400 if data is invalid", async () => {
    const res = await request(app).post("/movies").send({ title: "Broken" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Invalid movie data");
  });

  test("DELETE /movies/:id should remove a movie", async () => {
    const res = await request(app).delete("/movies/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("title", "Inception");

    // Verify it's removed
    const check = await request(app).get("/movies/1");
    expect(check.statusCode).toBe(404);
  });

  test("DELETE /movies/:id should return 404 if not found", async () => {
    const res = await request(app).delete("/movies/999");
    expect(res.statusCode).toBe(404);
  });

  test("POST /movies returns a valid movie", async () => {
    const res = await request(app)
      .post("/movies")
      .send({ title: "Tenet", rating: 7.5, genre: "Thriller" });
  
    expect(res.body).toBeValidMovie(); // 👈 using custom matcher
  });
});
