const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Comment {
    _id: ID
    comment_by: ID
    content: String
    date_created: String
  }

  type Dib {
    date_dibbed: String
    dibbed_by: ID
  }

  type Item {
    _id: ID!
    name: String!
    description: String!
    location: String
    image: String
    date_created: String!
    dibbed: [Dib]
    comments: [Comment]
  }

  type User {
    _id: ID!
    email: String!
    password: String!
    name: String!
    dibsCalled: [String]
    items: [String]
  }

  type Query {
    items: [Item]
    item(_id: ID): Item
    users: [User]
    user(_id: ID): User
    me: User
  }
  
  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    createItem(userId: ID!, name: String!, description: String!, location: String, 
    image: String): Item
    addItemToUser(userId: ID!, itemId: ID!): User
    removeItemFromUser(userId: ID!, itemId: ID!): User
    deleteItem(itemId: ID!): Item
    updateItem(_id: ID!, name: String, description: String, location: String, image: String): Item
    addDibToItem(itemId: ID!, dibbedBy: ID!): Item
    removeCommentFromItem(commentId: ID!, itemId: ID!): Item
    addCommentToItem(commenterId: ID!, itemId: ID!, content: String!): Item
    removeDibFromItem(itemId: ID!, dibbedBy: ID!): Item
    addDibToUser(itemId: ID!, userId: ID!): User
    removeDibFromUser(userId: ID!, itemId: ID!): User
    createUser( name: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
