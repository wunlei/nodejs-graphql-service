import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { ApolloError } from "apollo-server";
import "dotenv/config";
import {
  FiltersQuery,
  FindAllResponse,
  ServerResponse,
} from "../../types/index.types";
import {
  Band,
  CreateBandInput,
  ResponseBand,
  UpdateBandInput,
} from "./bands.types";

class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  willSendRequest(request: RequestOptions) {
    if (this.context.token) {
      request.headers.set("Authorization", this.context.token);
    }
  }

  async createOne(args: CreateBandInput): Promise<ResponseBand> {
    try {
      const response = await this.post("", args);
      return response;
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new ApolloError(
          err.extensions.response.body.message,
          err.extensions.response.body.statusCode,
          { error: err.extensions.response.body.error }
        );
      } else {
        throw err;
      }
    }
  }

  async deleteOne(id: string): Promise<ServerResponse> {
    try {
      await this.delete(`/${id}`);
      const response = {
        code: 204,
        success: true,
        message: "Deleted successfully",
      };
      return response;
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new ApolloError(
          err.extensions.response.body.message,
          err.extensions.response.body.statusCode,
          { error: err.extensions.response.body.error }
        );
      } else {
        throw err;
      }
    }
  }

  async findOne(id: string): Promise<ResponseBand> {
    try {
      const response = await this.get(`/${id}`);
      return response;
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new ApolloError(
          err.extensions.response.body.message,
          err.extensions.response.body.statusCode,
          { error: err.extensions.response.body.error }
        );
      } else {
        throw err;
      }
    }
  }

  async findAll(queries: FiltersQuery<Band>) {
    try {
      const query = {
        ...queries,
        ...queries.filters,
      };
      delete query.filters;

      const response: FindAllResponse<ResponseBand> = await this.get("", query);
      return response.items;
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new ApolloError(
          err.extensions.response.body.message,
          err.extensions.response.body.statusCode,
          { error: err.extensions.response.body.error }
        );
      } else {
        throw err;
      }
    }
  }

  async updateOne(id: string, args: UpdateBandInput): Promise<ResponseBand> {
    try {
      const response = await this.put(`/${id}`, args);
      return response;
    } catch (err) {
      if (err instanceof ApolloError) {
        throw new ApolloError(
          err.extensions.response.body.message,
          err.extensions.response.body.statusCode,
          { error: err.extensions.response.body.error }
        );
      } else {
        throw err;
      }
    }
  }
}

export default BandsService;
