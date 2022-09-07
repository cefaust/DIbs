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

  type Query {
    items: [Item]
    item(_id: String): Item
  }
`;

module.exports = typeDefs;
