import { GraphQLSchema } from "graphql";
import {
  mutation as postsMutation,
  properties as postsProperties,
  query as postsQuery,
} from "./resolvers/posts.resolver";
import {
  mutation as usersMutation,
  properties as usersProperties,
  query as usersQuery,
} from "./resolvers/users.resolver";

export default function createResolvers(
  subSchemas: GraphQLSchema[],
  executor: any
) {
  return {
    Query: {
      ...postsQuery(subSchemas),
      // ...usersQuery(subSchemas),
    },
    Mutation: {
      ...usersMutation(subSchemas, executor),
      ...postsMutation(subSchemas),
    },
    Post: postsProperties(subSchemas),
    // User: usersProperties(subSchemas),
  };
}
