import { config } from "dotenv";
config();

import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { schema } from "./schema";
import { createContext } from "./context";

const server = new ApolloServer({
  schema,
  context: ({ event }) => ({
    headers: event.headers,
    ...createContext(),
  }),
  // tracing: true,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: "*",
      credentials: true,
    },
  },
});

console.log(`🚀 Server ready!`);
