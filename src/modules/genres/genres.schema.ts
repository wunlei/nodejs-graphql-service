import { gql } from "apollo-server";

const typeDefsGenres = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input CreateGenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }

  input updateGenreInput {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input FilterGenreInput {
    _id: ID
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int, filters: FilterGenreInput): [Genre]
  }

  type Mutation {
    createGenre(data: CreateGenreInput): Genre
    updateGenre(data: updateGenreInput): Genre
    deleteGenre(id: ID!): MutationResponse
  }
`;

export default typeDefsGenres;
