import "dotenv/config";
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { ApolloError } from "apollo-server";
import {
  FiltersQuery,
  FindAllResponse,
  ServerResponse,
} from "../../types/index.types";
import {
  Album,
  CreateAlbumInput,
  ResponseAlbum,
  UpdateAlbumInput,
} from "./albums.types";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request: RequestOptions) {
    if (this.context.token) {
      request.headers.set("Authorization", this.context.token);
    }
  }

  async createOne(args: CreateAlbumInput): Promise<ResponseAlbum> {
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

  async findOne(id: string): Promise<ResponseAlbum> {
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

  async findAll(queries: FiltersQuery<Album>): Promise<Array<ResponseAlbum>> {
    try {
      const query = {
        ...queries,
        ...queries.filters,
      };
      delete query.filters;

      const response: FindAllResponse<ResponseAlbum> = await this.get(
        "",
        query
      );
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

  async updateOne(id: string, args: UpdateAlbumInput) {
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

export default AlbumsService;
