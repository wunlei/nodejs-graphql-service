import { gql } from "apollo-server";

const typeDefsUser = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type jwt {
    jwt: String
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): jwt
  }

  type Mutation {
    register(data: CreateUserInput): User
  }
`;

export default typeDefsUser;
