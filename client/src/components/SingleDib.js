import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';
import { REMOVE_DIB_FROM_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const SingleDib = ({ itemId }) => {
  const token = Auth.loggedIn() ? Auth.getProfile() : null;
  const [removeDibs, { error }] = useMutation(REMOVE_DIB_FROM_USER);

  const item = useQuery(QUERY_ITEM, {
      variables: { _id: itemId}
  });

  async function handleRemoveDibs(e) {
    try {
      const { data } = await removeDibs({ 
        variables : {
          userId: token.data._id,
          itemId: e.target.id
        }
      })
   } catch (error) {
      console.log(error)
   }
  }
  
  if (!item.data) {
    return <h3>No Item Yet</h3>;
  } else {
    return (
      
        <div className="card m-3 p-2 col-sm-10 col-lg-4">
            <div className="card-body">
                <h5 className="card-title">{item.data.item.name}</h5>
                <p className="card-text">{item.data.item.description}</p>
                
                <Link
                className="btn btn-primary m-2"
                to={`/items/${item.data.item._id}`}> View Item
                </Link>
                <button id={item.data.item._id} className="btn btn-primary m-2" onClick={(e) => {handleRemoveDibs(e)}}>
                  Remove Dibs 
                </button>
                
            </div>
        </div>
  
    )
  }
}

export default SingleDib

