import { gql } from "apollo-server";

const typeDefsBands = gql`
  type Member {
    _id: ID
    firstName: String
    secondName: String
    middleName: String
    country: String
    instrument: String
    years: [String]
  }

  input InputMember {
    artist: ID!
    instrument: String
    years: [String!]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  input CreateBandInput {
    name: String!
    origin: String
    website: String
    members: [InputMember]
    genresIds: [ID!]
  }

  input UpdateBandInput {
    id: ID!
    name: String
    origin: String
    website: String
    members: [InputMember]
    genresIds: [ID!]
  }

  input FilterBandInput {
    _id: ID
    name: String
    origin: String
    website: String
    members: [InputMember]
    genresIds: [ID!]
  }

  type Query {
    band(id: ID!): Band
    bands(limit: Int, offset: Int, filters: FilterBandInput): [Band]
  }

  type Mutation {
    createBand(data: CreateBandInput): Band
    updateBand(data: UpdateBandInput): Band
    deleteBand(id: ID!): MutationResponse
  }
`;

export default typeDefsBands;
