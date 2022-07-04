import { UserInputError } from "apollo-server";
import { dataSources } from "../../server/server";
import { Album, CreateAlbumInput, UpdateAlbumInput } from "./albums.types";
import { FiltersQuery } from "../../types/index.types";

const resolversAlbums = {
  Query: {
    album: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.AlbumService.findOne(args.id);
    },
    albums: (parent: undefined, args: FiltersQuery<Album>) => {
      return dataSources.AlbumService.findAll(args);
    },
  },
  Mutation: {
    createAlbum: (parent: undefined, args: { data: CreateAlbumInput }) => {
      return dataSources.AlbumService.createOne(args.data);
    },
    deleteAlbum: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value");
      }
      return dataSources.AlbumService.deleteOne(args.id);
    },
    updateAlbum: (parent: undefined, args: { data: UpdateAlbumInput }) => {
      if (!args.data.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.AlbumService.updateOne(args.data.id, args.data);
    },
  },
  Album: {
    id: (parent: Album) => parent._id,
    artists: (parent: Album) => {
      if (parent.artistsIds) {
        const artists = parent.artistsIds.map((bandId) =>
          dataSources.ArtistService.findOne(bandId)
        );
        return artists;
      }
    },
    bands: (parent: Album) => {
      if (parent.bandsIds) {
        const bands = parent.bandsIds.map((bandId) =>
          dataSources.BandsService.findOne(bandId)
        );
        return bands;
      }
    },
    genres: (parent: Album) => {
      if (parent.genresIds) {
        const genres = parent.genresIds.map((bandId) =>
          dataSources.GenresService.findOne(bandId)
        );
        return genres;
      }
    },
  },
};

export default resolversAlbums;
