import { dataSources } from "../../server/server";
import { LoginInput, RegisterInput, User } from "./user.types";

const resolversUsers = {
  Query: {
    user: (parent: undefined, args: { id: string }) => {
      return dataSources.UserService.findOne(args.id);
    },
    jwt: (parent: undefined, args: LoginInput) => {
      return dataSources.UserService.login(args);
    },
  },
  Mutation: {
    register: (parent: undefined, args: { data: RegisterInput }) => {
      return dataSources.UserService.register(args.data);
    },
  },
  User: {
    id: (parent: User) => parent._id,
  },
};

export default resolversUsers;
