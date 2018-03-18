export default `
type Query{
    feed: [Post!]!
    drafts:[Post!]!
    post(id:ID!):Post
    me:User
}

type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createDraft(title: String!, text: String!): Post!
    publish(id: ID!): Post!
    deletePost(id: ID!): Post!
}

type AuthPayload {
    token: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts: [Post!]!
  }
  
  interface Node {
    id: ID!
  }
  
  scalar DateTime

  type Post implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    isPublished: Boolean!
    title: String!
    text: String!
    author: User!
  }
  `