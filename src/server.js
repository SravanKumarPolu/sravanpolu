import { createServer, Model, Response } from "miragejs";
import sravanImage from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan1.png";
import sravanImage2 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan2.png";
import sravanImage3 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan3.png";
import sravan4 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan4.png";
import sravan5 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan5.png";
import sravan6 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan6.png";
import sravan7 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan7.png";
import sravan8 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan8.png";
import sravan9 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan9.png";
import sravan10 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan10.png";
import sravan11 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan11.png";
import sravan12 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan12.png";
import sravan13 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan13.png";
import sravan14 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan14.png";
import sravan15 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan15.png";
import sravan16 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan16.png";
import sravan17 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan17.png";
import sravan18 from "D:/Sandbox Projects/sravanpolu/src/assets/images/sravan18.png";
createServer({
  models: {
    photos: Model,
    user: Model, // Add this line to define the "user" model
  },

  seeds(server) {
    server.create("photo", {
      id: "1",
      name: "sravan1",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: sravanImage,
      type: "simple",
      hostId: "123",
    });
    server.create("photo", {
      id: "2",
      name: "reliable-red",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: sravanImage2,
      type: "rugged",
      hostId: "123",
    });
    server.create("photo", {
      id: "3",
      name: "sravan3",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: sravanImage3,
      type: "luxury",
      hostId: "456",
    });
    server.create("photo", {
      id: "4",
      name: "sravan4",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: sravan4,
      type: "luxury",
      hostId: "456",
    });
    server.create("photo", {
      id: "5",
      name: "sravan5",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: sravan5,
      type: "luxury",
      hostId: "456",
    });
    server.create("photo", {
      id: "6",
      name: "sravan6",

      imageUrl: sravan6,
      type: "luxury",
      hostId: "456",
    });
    server.create("photo", {
      id: "7",
      name: "sravan7",
      imageUrl: sravan7,
      type: "luxury",
      hostId: "456",
    });

    server.create("photo", {
      id: "9",
      name: "sravan9",

      imageUrl: sravan9,
      type: "luxury",
      hostId: "456",
    });
    server.create("photo", {
      id: "10",
      name: "sravan10",

      imageUrl: sravan10,
    });
    server.create("photo", {
      id: "11",
      name: "sravan11",
      imageUrl: sravan11,
    });
    server.create("photo", {
      id: "12",
      name: "sravan12",

      imageUrl: sravan12,
    });
    server.create("photo", {
      id: "13",
      name: "sravan13",

      imageUrl: sravan13,
      type: "luxury",
      hostId: "456",
    });

    server.create("photo", {
      id: "15",
      name: "sravan15",

      imageUrl: sravan15,
    });

    server.create("user", {
      id: "123",
      email: "skr@gmail.com",
      password: "abc@1",
      name: "SravanKumar",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = true;
    this.timing = 1000;

    this.get("/photos", (schema, request) => {
      // return new Response(400, {}, { error: "Error fetching data" });
      return schema.photos.all();
    });

    this.get("/photos/:id", (schema, request) => {
      const id = request.params.id;
      return schema.photos.find(id);
    });
    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😇
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        );
      }
    });
  },
});
