import { RESTDataSource } from "apollo-datasource-rest";

class ArtistService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }
}

export default ArtistService;
