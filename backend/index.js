import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import mongoose from "mongoose";
import dotenv from "dotenv";

import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/typeDefs.js";

// Load .env
dotenv.config();

// Express server.
const app = express();
const httpServer = http.createServer(app);

// ApolloServer config.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

// DB setup + connection.
mongoose.set("strictQuery", Boolean(false)); // To avoid warning in terminal.
mongoose.connect(process.env.MONGODB).then(async () => {
  console.log("MongoDB connected !");

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log("🚀 Server ready at http://localhost:4000/graphql");
});
