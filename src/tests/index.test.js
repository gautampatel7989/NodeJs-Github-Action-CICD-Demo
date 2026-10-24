
const request = require("supertest");
const app = require("../../src");

describe("Node.js Express API", () => {
  describe("GET /", () => {
    it("should return the welcome message", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        message:
          "Welcome to Node.js GitHub Actions CI/CD Demo!"
      });
    });
  });

  describe("GET /health", () => {
    it("should return the healthy status", async () => {
      const response = await request(app).get("/health");

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        status: "UP",
        message: "API is healthy"
      });
    });
  });

  it("should return 404 for an unknown endpoint", async () => {
    const response = await request(app).get("/unknown");

    expect(response.status).toBe(404);
  });
});
