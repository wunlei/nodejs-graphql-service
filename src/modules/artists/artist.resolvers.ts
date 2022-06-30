import { UserInputError } from "apollo-server";
import { dataSources } from "../../server/server";
import { Artist, UpdateArtistInput, CreateArtistInput } from "./artist.types";
import { FiltersQuery } from "../../types/index.types";

const resolversArtists = {
  Query: {
    artist: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.ArtistService.findOne(args.id);
    },
    artists: (parent: undefined, args: FiltersQuery<Artist>) => {
      return dataSources.ArtistService.findAll(args);
    },
  },
  Mutation: {
    createArtist: (parent: undefined, args: { data: CreateArtistInput }) => {
      return dataSources.ArtistService.createOne(args.data);
    },
    deleteArtist: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.ArtistService.deleteOne(args.id);
    },
    updateArtist: (parent: undefined, args: { data: UpdateArtistInput }) => {
      if (!args.data.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.ArtistService.updateOne(args.data.id, args.data);
    },
  },
  Artist: {
    id: (parent: Artist) => parent._id,
  },
};

export default resolversArtists;
