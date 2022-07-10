import { gql } from "apollo-server";

const typeDefsTracks = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  input CreateTrackInput {
    title: String!
    albumId: ID
    duration: Int
    released: Int
    bandsIds: [ID!]
    artistsIds: [ID!]
    genresIds: [ID!]
  }

  input UpdateTrackInput {
    id: ID!
    title: String
    albumId: ID
    duration: Int
    released: Int
    bandsIds: [ID!]
    artistsIds: [ID!]
    genresIds: [ID!]
  }

  input FilterTrackInput {
    _id: ID
    title: String
    albumId: ID
    duration: Int
    released: Int
    bandsIds: [ID!]
    artistsIds: [ID!]
    genresIds: [ID!]
  }

  type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int, filters: FilterTrackInput): [Track]
  }

  type Mutation {
    createTrack(data: CreateTrackInput): Track
    updateTrack(data: UpdateTrackInput): Track
    deleteTrack(id: ID!): MutationResponse
  }
`;

export default typeDefsTracks;
