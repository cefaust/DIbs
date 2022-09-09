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
    }
  }
}
`;