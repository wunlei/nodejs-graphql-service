import { UserInputError } from "apollo-server";
import { dataSources } from "../../server/server";
import { FiltersQuery } from "../../types/index.types";
import { CreateTrackInput, Track, UpdateTrackInput } from "./tracks.types";

const resolversTracks = {
  Query: {
    track: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.TracksService.findOne(args.id);
    },
    tracks: (parent: undefined, args: FiltersQuery<Track>) => {
      return dataSources.TracksService.findAll(args);
    },
  },
  Mutation: {
    createTrack: (parent: undefined, args: { data: CreateTrackInput }) => {
      return dataSources.TracksService.createOne(args.data);
    },
    deleteTrack: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.TracksService.deleteOne(args.id);
    },
    updateTrack: (parent: undefined, args: { data: UpdateTrackInput }) => {
      if (!args.data.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.TracksService.updateOne(args.data.id, args.data);
    },
  },
  Track: {
    id: (parent: Track) => parent._id,
    bands: (parent: Track) => {
      const bands = parent.bandsIds.map((bandId) =>
        dataSources.BandsService.findOne(bandId)
      );
      return bands;
    },
    genres: (parent: Track) => {
      const genres = parent.genresIds.map((genreId) =>
        dataSources.GenresService.findOne(genreId)
      );
      return genres;
    },
    artists: (parent: Track) => {
      const artists = parent.artistsIds.map((artistId) =>
        dataSources.ArtistService.findOne(artistId)
      );
      return artists;
    },
  },
};

export default resolversTracks;
