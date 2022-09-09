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
    items: [ID]
  }

  type Query {
    items: [Item]
    item(_id: String): Item
  }

  type Mutation {
    createItem(userId: ID!, name: String!, description: String!, location: String!, 
      image: String): Item
    addItemToUser(userId: ID!, itemId: ID!): User
    deleteItem(itemId: ID!): Item
  }
`;

module.exports = typeDefs;
