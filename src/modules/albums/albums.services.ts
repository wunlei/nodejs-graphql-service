import { RESTDataSource } from "apollo-datasource-rest";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }
}

export default AlbumsService;
