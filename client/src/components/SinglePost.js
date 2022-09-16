import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';
import { DELETE_ITEM, REMOVE_ITEM_FROM_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const SinglePost = ({ itemId }) => {
  const token = Auth.loggedIn() ? Auth.getProfile() : null;
  const [removePost, { error }] = useMutation(REMOVE_ITEM_FROM_USER);
  const [deleteItem, { error2 }] = useMutation(DELETE_ITEM);

  const {loading, data} = useQuery(QUERY_ITEM, {
      variables: { _id: itemId}
  });

  async function handleRemovePost(e) {
    try {
      const { data } = await removePost({ 
        variables : {
          userId: token.data._id,
          itemId: e.target.id
        }
      })
      await deleteItem({
        variables: {
            itemId: e.target.id
        }
      })
   } catch (error) {
      console.log(error)
   }
  }
  
  if (loading || !data.item) {
    return <h3>No Item Yet</h3>;
  } else {
    console.log(data)
    return (
      <div>
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{data.item.name}</h5>
                <p className="card-text">{data.item.description}</p>
                <Link
                className="btn btn-primary"
                to={`/items/${data.item._id}`}> View Item
                </Link>
                <button id={data.item._id} className="btn btn-primary" onClick={(e) => {handleRemovePost(e)}}>
                  Remove Item
                </button>
                <Link
                  className="btn btn-primary"
                  to={`/update-item/${data.item._id}`}> Update Item
                </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default SinglePost

