import { ApolloServer } from "apollo-server";
import {
  AlbumsService,
  ArtistService,
  BandsService,
  FavoritesService,
  GenresService,
  TracksService,
  typeDefsAlbums,
  typeDefsArtist,
  typeDefsBands,
  typeDefsFavourites,
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
  FavouritesService: new FavoritesService(),
};

export const server = new ApolloServer({
  typeDefs: [
    typeDefsServer,
    typeDefsAlbums,
    typeDefsArtist,
    typeDefsBands,
    typeDefsGenres,
    typeDefsTracks,
    typeDefsUser,
    typeDefsFavourites,
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
