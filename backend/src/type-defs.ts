const typeDefs = `
  extend type Post {
      votes: Int
  }
  
  type Mutation {
      upvote(id: ID!): Post
      downvote(id: ID!): Post
  
      login(email: String!, password: String!): String
      signup(name: String!, email: String!, password: String!): String
  }
`;

export default typeDefs;
