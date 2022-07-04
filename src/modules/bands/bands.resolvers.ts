import { UserInputError } from "apollo-server";
import { dataSources } from "../../server/server";
import { FiltersQuery } from "../../types/index.types";
import { Band, CreateBandInput, UpdateBandInput } from "./bands.types";

const resolversBands = {
  Query: {
    band: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.BandsService.findOne(args.id);
    },
    bands: (parent: undefined, args: FiltersQuery<Band>) => {
      return dataSources.BandsService.findAll(args);
    },
  },
  Mutation: {
    createBand: (parent: undefined, args: { data: CreateBandInput }) => {
      return dataSources.BandsService.createOne(args.data);
    },
    deleteBand: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value");
      }
      return dataSources.BandsService.deleteOne(args.id);
    },
    updateBand: (parent: undefined, args: { data: UpdateBandInput }) => {
      if (!args.data.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.BandsService.updateOne(args.data.id, args.data);
    },
  },
  Band: {
    id: (parent: Band) => parent._id,
    genres: (parent: Band) => {
      const genres = parent.genresIds.map((genreId) =>
        dataSources.GenresService.findOne(genreId)
      );
      return genres;
    },
    members: (parent: Band) => {
      const members = parent.members.map(async (member) => {
        const artist = await dataSources.ArtistService.findOne(member.artist);
        return {
          ...artist,
          years: member.years,
          instrument: member.instrument,
        };
      });
      return members;
    },
  },
};

export default resolversBands;
