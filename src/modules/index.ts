import typeDefsAlbums from "./albums/albums.schema";
import typeDefsArtist from "./artists/artist.schema";
import typeDefsBands from "./bands/bands.schema";
import typeDefsFavourites from "./favorites/favorites.schema";
import typeDefsGenres from "./genres/genres.schema";
import typeDefsTracks from "./tracks/tracks.schema";
import typeDefsUser from "./users/user.schema";
import AlbumsService from "./albums/albums.services";
import ArtistService from "./artists/artist.services";
import BandsService from "./bands/bands.services";
import FavoritesService from "./favorites/favorites.services";
import GenresService from "./genres/genres.services";
import UsersService from "./users/users.services";
import TracksService from "./tracks/tracks.services";
import resolversAlbums from "./albums/albums.resolvers";
import resolversArtists from "./artists/artist.resolvers";
import resolversBands from "./bands/bands.resolvers";
import resolversFavorites from "./favorites/favorites.resolvers";
import resolversGenres from "./genres/genres.resolvers";
import resolversTracks from "./tracks/tracks.resolvers";
import resolversUsers from "./users/user.resolvers";

export {
  resolversAlbums,
  resolversArtists,
  resolversBands,
  resolversFavorites,
  resolversGenres,
  resolversTracks,
  resolversUsers,
  typeDefsAlbums,
  typeDefsArtist,
  typeDefsBands,
  typeDefsFavourites,
  typeDefsGenres,
  typeDefsTracks,
  typeDefsUser,
  AlbumsService,
  ArtistService,
  BandsService,
  GenresService,
  FavoritesService,
  UsersService,
  TracksService,
};
