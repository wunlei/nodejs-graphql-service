import { gql } from "apollo-server";

const typeDefsArtist = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  input CreateArtistInput {
    firstName: String!
    secondName: String!
    country: String!
    middleName: String
    birthDate: String
    birthPlace: String
    bandsIds: [ID!]
    instruments: [String!]
  }

  input UpdateArtistInput {
    id: ID!
    firstName: String
    secondName: String
    country: String
    middleName: String
    birthDate: String
    birthPlace: String
    bandsIds: [ID!]
    instruments: [String!]
  }

  input FilterArtistInput {
    _id: ID
    firstName: String
    secondName: String
    country: String
    middleName: String
    birthDate: String
    birthPlace: String
    bandsIds: [ID!]
    instruments: [String!]
  }

  type Query {
    artist(id: ID!): Artist
    artists(limit: Int, offset: Int, filters: FilterArtistInput): [Artist]
  }

  type Mutation {
    createArtist(data: CreateArtistInput): Artist
    updateArtist(data: UpdateArtistInput): Artist
    deleteArtist(id: ID!): MutationResponse
  }
`;

export default typeDefsArtist;
