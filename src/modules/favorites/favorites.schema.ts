import { gql } from "apollo-server";

const typeDefsFavourites = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  input FilterFavouritesInput {
    _id: ID
    bandsIds: [ID!]
    genresIds: [ID!]
    artistsIds: [ID!]
    tracksIds: [ID!]
  }

  type Query {
    favorites: Favourites
  }

  type Mutation {
    addTrackToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addArtistToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
    deleteTrackFromFavourites(id: ID!): Favourites
    deleteBandFromFavourites(id: ID!): Favourites
    deleteArtistFromFavourites(id: ID!): Favourites
    deleteGenreFromFavourites(id: ID!): Favourites
  }
`;

export default typeDefsFavourites;
