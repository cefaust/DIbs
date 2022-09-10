import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
  mutation createItem($userId: ID!, $name: String!, $description: String!, $location: String!, 
        $image: String) {
    createItem(name: $name, description: $description, location: $location, image: $image) {
      _id
      name
      description
      location
      image
    }
  }
`

export const ADD_ITEM_TO_USER = gql`
  mutation addItemToUser($userId: ID!, $itemId: ID!) {
    addItemToUser(userId: $userId, itemId: $itemId) {
      _id
      email
      password
      name
      dibsCalled
      items
    }
  }
`

export const DELETE_ITEM = gql`
  mutation deleteItem($itemId: ID!) {
    deleteItem(itemId: $itemId) {
      name
      description
      location
      image
      dibbed
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($_id: ID!, $name: String, $description, $location: String, $image: String) {
    updateItem(_id: $_id, name: $name, description: $description, location: $location, image: $image) {
      name
      description
      location
      image
      dibbed
    }
  }
`;

export const ADD_DIB_TO_USER = gql`
  mutation addDibToUser($userId: ID!, $itemId: ID!) {
    addDibToUser(userId: $userId, itemId: $itemId) {
      email
      password
      name
      dibsCalled
      items
    }
  } 
`;

export const REMOVE_DIB_FROM_USER = gql`
  mutation removeDibFromUser($userId: ID!, $itemId: ID!) {
    removeDibFromUser(userId: $userId, itemId: $itemId) {
      email
      password
      name
      dibsCalled
      items
    }
  } 
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      user {
        _id
        email
        password
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String! $password: String!) {
  login(email: $email, password: $password) {
    user {
      _id
      email
      password
    }
  }
}
`;
