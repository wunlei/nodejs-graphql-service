import { RESTDataSource } from "apollo-datasource-rest";

class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }
}

export default TracksService;
