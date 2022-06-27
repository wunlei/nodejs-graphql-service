import { ApolloServer, gql } from "apollo-server";
import "dotenv/config";

const typeDefs = gql`
  type jwt {
    jwt: String
  }
  type Query {
    jwt: jwt
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
