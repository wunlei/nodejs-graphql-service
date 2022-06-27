import { gql } from "apollo-server";

const typeDefsAlbums = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input CreateAlbumInput {
    name: String!
    released: Int
    artistsIds: [String!]
    tracksIds: [String!]
    genresIds: [String!]
    bandsIds: [String!]
    image: String
  }

  input updateAlbumInput {
    id: ID!
    name: String
    released: Int
    artistsIds: [String!]
    tracksIds: [String!]
    genresIds: [String!]
    bandsIds: [String!]
    image: String
  }

  input FilterAlbumInput {
    _id: ID
    name: String
    released: Int
    artistsIds: [String!]
    tracksIds: [String!]
    genresIds: [String!]
    bandsIds: [String!]
    image: String
  }

  type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int, filters: FilterAlbumInput): [Album]
  }

  type Mutation {
    createAlbum(data: CreateAlbumInput): Album
    updateAlbum(data: updateAlbumInput): Album
    deleteAlbum(id: ID!): MutationResponse
  }
`;

export default typeDefsAlbums;
