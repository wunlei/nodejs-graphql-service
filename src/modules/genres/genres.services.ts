import { RESTDataSource } from "apollo-datasource-rest";

class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }
}

export default GenresService;
