const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Comment {
    content: String!
    date_created: String!
  }

  type Dib {
    date_dibbed: String
    dibbed_by: ID
  }

  type Item {
    _id: ID!
    name: String!
    description: String!
    location: String!
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
    items: [ID]
  }

  type Query {
    items: [Item]
    item(_id: String): Item
  }
  
  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    createItem(userId: ID!, name: String!, description: String!, location: String!, 
      image: String): Item
    addItemToUser(userId: ID!, itemId: ID!): User
    removeItemFromUser(userId: ID!, itemId: ID!): User
    deleteItem(itemId: ID!): Item
    updateItem(_id: ID!, name: String, description: String, location: String, image: String): Item
    addDibToItem(itemId: ID!, dibbedBy: ID!): Item
    removeCommentFromItem(commenterId: ID!, itemId: ID!): Item
    addCommentToItem(commenterId: ID!, itemId: ID!, content: String!): Item
    removeDibFromItem(itemId: ID!, dibbedBy: ID!): Item
    addDibToUser(userId: ID!, itemId: ID!): User
    removeDibFromUser(userId: ID!, itemId: ID!): User
    createUser( name: String!, password: String!, email: String!): Auth
  }
`;

module.exports = typeDefs;
