import { UserInputError } from "apollo-server";
import { dataSources } from "../../server/server";
import { FiltersQuery } from "../../types/index.types";
import { CreateGenreInput, Genre, UpdateGenreInput } from "./genres.types";

const resolversGenres = {
  Query: {
    genre: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.GenresService.findOne(args.id);
    },
    genres: (parent: undefined, args: FiltersQuery<Genre>) => {
      return dataSources.GenresService.findAll(args);
    },
  },
  Mutation: {
    createGenre: (parent: undefined, args: { data: CreateGenreInput }) => {
      return dataSources.GenresService.createOne(args.data);
    },
    deleteGenre: (parent: undefined, args: { id: string }) => {
      if (!args.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.GenresService.deleteOne(args.id);
    },
    updateGenre: (parent: undefined, args: { data: UpdateGenreInput }) => {
      if (!args.data.id.match(/^[0-9a-fA-F]{24}$/)) {
        throw new UserInputError("Invalid argument value: id");
      }
      return dataSources.GenresService.updateOne(args.data.id, args.data);
    },
  },
  Genre: {
    id: (parent: Genre) => parent._id,
  },
};

export default resolversGenres;
