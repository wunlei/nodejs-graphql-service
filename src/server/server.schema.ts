import { gql } from "apollo-server";

const typeDefsServer = gql`
  type MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;

export default typeDefsServer;
