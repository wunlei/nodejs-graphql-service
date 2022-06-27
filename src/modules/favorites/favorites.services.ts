import { RESTDataSource } from "apollo-datasource-rest";

class FavoritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }
}

export default FavoritesService;
