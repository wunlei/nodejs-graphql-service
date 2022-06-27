import { ApolloServer } from "apollo-server";
import typeDefsAlbums from "../modules/albums/albums.schema";
import AlbumsService from "../modules/albums/albums.services";
import typeDefsArtist from "../modules/artists/artist.schema";
import ArtistService from "../modules/artists/artist.services";
import typeDefsBands from "../modules/bands/bands.schema";
import BandsService from "../modules/bands/bands.services";
import typeDefsGenres from "../modules/genres/genres.schema";
import GenresService from "../modules/genres/genres.services";
import typeDefsTracks from "../modules/tracks/tracks.schema";
import TracksService from "../modules/tracks/tracks.services";
import typeDefsUser from "../modules/users/user.schema";
import UsersService from "../modules/users/users.services";
import typeDefsServer from "./server.schema";

export const dataSources = {
  AlbumService: new AlbumsService(),
  ArtistService: new ArtistService(),
  BandsService: new BandsService(),
  GenresService: new GenresService(),
  TracksService: new TracksService(),
  UserService: new UsersService(),
};

export const server = new ApolloServer({
  typeDefs: [
    typeDefsServer,
    typeDefsArtist,
    typeDefsUser,
    typeDefsTracks,
    typeDefsGenres,
    typeDefsBands,
    typeDefsAlbums,
  ],
  dataSources: () => {
    return dataSources;
  },
  context: ({ req }) => {
    const token = req.headers.authorization;
    return { token };
  },
  debug: process.env.NODE_ENV === "development" ? true : false,
});
