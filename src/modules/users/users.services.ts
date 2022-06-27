import { RESTDataSource } from "apollo-datasource-rest";

class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }
}

export default UsersService;
