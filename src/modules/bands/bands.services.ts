import { RESTDataSource } from "apollo-datasource-rest";

class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }
}

export default BandsService;
