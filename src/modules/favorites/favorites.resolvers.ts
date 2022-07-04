import { dataSources } from "../../server/server";
import { Favorite, FavoriteInput } from "./favorites.types";

const resolversFavorites = {
  Query: {
    favorites: () => {
      return dataSources.FavouritesService.findOne();
    },
  },
  Mutation: {
    addTrackToFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "tracks",
      };
      return dataSources.FavouritesService.createOne(data);
    },
    addBandToFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "bands",
      };
      return dataSources.FavouritesService.createOne(data);
    },
    addArtistToFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "artists",
      };
      return dataSources.FavouritesService.createOne(data);
    },
    addGenreToFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "genres",
      };
      return dataSources.FavouritesService.createOne(data);
    },
    deleteTrackFromFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "tracks",
      };
      return dataSources.FavouritesService.deleteOne(data);
    },
    deleteBandFromFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "bands",
      };
      return dataSources.FavouritesService.deleteOne(data);
    },
    deleteArtistFromFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "artists",
      };
      return dataSources.FavouritesService.deleteOne(data);
    },
    deleteGenreFromFavourites: (parent: undefined, args: { id: string }) => {
      const data: FavoriteInput = {
        id: args.id,
        type: "genres",
      };
      return dataSources.FavouritesService.deleteOne(data);
    },
  },
  Favourites: {
    id: (parent: Favorite) => parent._id,
    bands: (parent: Favorite) => {
      const bands = parent.bandsIds.map((bandId) =>
        dataSources.BandsService.findOne(bandId)
      );
      return bands;
    },
    genres: (parent: Favorite) => {
      const genres = parent.genresIds.map((genreId) =>
        dataSources.GenresService.findOne(genreId)
      );
      return genres;
    },
    artists: (parent: Favorite) => {
      const artists = parent.artistsIds.map((artistId) =>
        dataSources.ArtistService.findOne(artistId)
      );
      return artists;
    },
    tracks: (parent: Favorite) => {
      const tracks = parent.tracksIds.map((trackId) =>
        dataSources.TracksService.findOne(trackId)
      );
      return tracks;
    },
  },
};

export default resolversFavorites;
