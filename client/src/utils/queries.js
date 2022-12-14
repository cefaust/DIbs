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
  query item($_id: ID!) {
    item(_id: $_id) {
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
        _id
        comment_by
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
    items
  }
  `;

export const QUERY_USER= gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      email
      name 
      dibsCalled
      items
    }
  }
`;
