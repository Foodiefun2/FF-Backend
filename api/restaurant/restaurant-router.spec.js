const request = require("supertest");
const Rests = require("./restaurant-model.js");
const db = require("../../data/db-config.js");
const server = require("../server.js");

describe("/api/restaurants", function() {
  beforeEach(async () => {
    await db("restaurants").truncate();
  });

  describe("GET /", function() {
    it("Should send a 400 if no user is logged in", function() {
      return request(server)
        .get("/api/restaurants")
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
    it("Should retrieve Restaurants after user is logged in", async function() {
      await Rests.addRest({
        name: "Tacobell",
        cuisine: "Mexican Fastfood",
        location: "123 Tacobell Street",
        hours: "7am - 12am",
        review: "Tacobell is the best food",
        img: null,
        foodie_id: 1
      });
      await Rests.addRest({
        name: "PastaHouse",
        cuisine: "Italian",
        location: "323 Pasta Drive",
        hours: "9am - 6pm",
        review: "Never forgetti the spaghetti",
        img: null,
        foodie_id: 3
      });
      await Rests.addRest({
        name: "CowSteak",
        cuisine: "American Steakhouse",
        location: "878 Meat Ave",
        hours: "9am - 8pm",
        review: "Biggest, Bestest Steak",
        img: null,
        foodie_id: 4
      });
      await Rests.addRest({
        name: "Burger King",
        cuisine: "American Fastfood",
        location: "111 King's Court",
        hours: "6am - 11pm",
        review: "Cheetos and Burgers!",
        img: null,
        foodie_id: 5
      });
      await Rests.addRest({
        name: "Pizza My Heart",
        cuisine: "Pizza",
        location: "9871 Pizzar Ave",
        hours: "9am - 7pm",
        review: "Pesta Pizza is yummy",
        img: null,
        foodie_id: 6
      });
      return request(server)
        .post("/api/auth/login")
        .send({ username: "Steve", password: "test" })
        .then(res => {
          const token = res.body.token;
          expect(res.status).toBe(200);
          return request(server)
            .get("/api/restaurants")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
              expect(res.body.length).toBe(5);
            });
        });
    });
  });

  describe("POST to /", function() {
    it("Should send back object on successful post", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "Linda", password: "test" })
        .then(res => {
          const token = res.body.token;
          return request(server)
            .post("/api/restaurants")
            .set("Authorization", token)
            .send({
              name: "Tacobell",
              cuisine: "Mexican Fastfood",
              location: "123 Tacobell Street",
              hours: "7am - 12am",
              review: "Tacobell is the best food",
              img: null,
              foodie_id: 1
            })
            .then(res => {
              expect(res.body).toStrictEqual({
                id: 1,
                name: "Tacobell",
                cuisine: "Mexican Fastfood",
                location: "123 Tacobell Street",
                hours: "7am - 12am",
                review: "Tacobell is the best food",
                img: null,
                foodie_id: 1
              });
            });
        });
    });
  });

  describe("PUT to /:id", function() {
    it("Should update the Restaurant", async function() {
      await Rests.addRest({
        name: "Tacobell",
        cuisine: "Mexican Fastfood",
        location: "123 Tacobell Street",
        hours: "7am - 12am",
        review: "Tacobell is the best food",
        img: null,
        foodie_id: 1
      });
      await Rests.addRest({
        name: "PastaHouse",
        cuisine: "Italian",
        location: "323 Pasta Drive",
        hours: "9am - 6pm",
        review: "Never forgetti the spaghetti",
        img: null,
        foodie_id: 3
      });
      await Rests.addRest({
        name: "CowSteak",
        cuisine: "American Steakhouse",
        location: "878 Meat Ave",
        hours: "9am - 8pm",
        review: "Biggest, Bestest Steak",
        img: null,
        foodie_id: 4
      });

      return request(server)
        .post("/api/auth/login")
        .send({ username: "Steve", password: "test" })
        .then(res => {
          const token = res.body.token;
          return request(server)
            .put("/api/restaurants/3")
            .set("Authorization", token)
            .send({ name: "CowCow Steak" })
            .then(res => {
              expect(res.body.name).toBe("CowCow Steak");
            });
        });
    });
  });

  describe("DELETE to /:id", function() {
    it("Should send a 204 on delete", async function() {
      await Rests.addRest({
        name: "PastaHouse",
        cuisine: "Italian",
        location: "323 Pasta Drive",
        hours: "9am - 6pm",
        review: "Never forgetti the spaghetti",
        img: null,
        foodie_id: 3
      });
      return request(server)
        .post("/api/auth/login")
        .send({ username: "Steve", password: "test" })
        .then(res => {
          const token = res.body.token;
          return request(server)
            .delete("/api/restaurants/1")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(204);
            });
        });
    });
  });
});
