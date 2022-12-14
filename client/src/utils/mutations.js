import { gql } from '@apollo/client';

export const CREATE_ITEM = gql`
  mutation createItem($userId: ID!, $name: String!, $description: String!, $location: String, 
      ) {
    createItem(userId: $userId name: $name, description: $description, location: $location) {
      _id
      name
      description
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
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
    }
  }
`

export const REMOVE_ITEM_FROM_USER = gql`
  mutation removeItemFromUser($userId: ID!, $itemId: ID!) {
    removeItemFromUser(userId: $userId, itemId: $itemId) {
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
      _id
      name
      description
      location
      image
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($_id: ID!, $name: String, $description: String, $location: String, $image: String) {
    updateItem(_id: $_id, name: $name, description: $description, location: $location, image: $image) {
      _id
      name
      description
      location
      image
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
    }
  }
`;

export const ADD_DIB_TO_ITEM = gql`
  mutation addDibToItem($itemId: ID!, $dibbedBy: ID!) {
    addDibToItem(itemId: $itemId, dibbedBy: $dibbedBy) {
      _id
      name
      description
      location
      image
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
    }
  }
`;

export const REMOVE_DIB_FROM_ITEM = gql`
  mutation removeDibFromItem($itemId: ID!, $dibbedBy: ID!) {
    removeDibFromItem(itemId: $itemId, dibbedBy: $dibbedBy) {
      _id
      name
      description
      location
      image
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
    }
  }
`;

export const ADD_COMMENT_TO_ITEM = gql`
  mutation addCommentToItem($commenterId: ID!, $itemId: ID!, $content: String!) {
    addCommentToItem(commenterId: $commenterId, itemId: $itemId, content: $content) {
      _id
      name
      description
      location
      image
      dibbed {
        date_dibbed
        dibbed_by
      }
      comments {
        comment_by
        content
        date_created
      }
    }
  }
`;

export const ADD_DIB_TO_USER = gql`
  mutation addDibToUser($itemId: ID!, $userId: ID!) {
    addDibToUser(itemId: $itemId, userId: $userId) {
      _id
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
      _id
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
      token
      user {
        _id
        email
        password
        name
        dibsCalled
        items
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String! $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      name
      dibsCalled
      items
      }
    }
  }
`;
