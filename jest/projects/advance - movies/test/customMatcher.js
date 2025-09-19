expect.extend({
    toBeValidMovie(received) {
      const pass =
        received &&
        typeof received.id === "number" &&
        typeof received.title === "string" &&
        typeof received.rating === "number" &&
        typeof received.genre === "string";
  
      if (pass) {
        return {
          message: () => `expected ${received} not to be a valid movie`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected ${received} to be a valid movie`,
          pass: false,
        };
      }
    },
  });
  