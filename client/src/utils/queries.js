import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query items {
    items {
      _id
      name
      description
      location
      image
      date_created
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        content
        date_created
      }
    }
  }
`;

export const QUERY_ITEM = gql`
  query item($_id: String) {
    item(id: $_id) {
      _id
      name
      description
      location
      image
      date_created
      date_dibbed
      comments {
        content
        date_created
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    _id
    email
    name
    items {
      _id
      name
      description
    }
  }
  `;

export const QUERY_USER= gql`
  query user {
    _id
    email
    name
    items {
      _id
      name
      description
      location
      image
      date_created
      date_dibbed
    }
  }
  `;
