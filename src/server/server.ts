import { ApolloServer } from "apollo-server";
import {
  AlbumsService,
  ArtistService,
  BandsService,
  GenresService,
  TracksService,
  typeDefsAlbums,
  typeDefsArtist,
  typeDefsBands,
  typeDefsGenres,
  typeDefsTracks,
  typeDefsUser,
  UsersService,
} from "../modules/index";

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
