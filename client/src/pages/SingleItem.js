import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth'

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_ITEM } from '../utils/queries';
import { ADD_DIB_TO_USER, ADD_DIB_TO_ITEM, REMOVE_DIB_FROM_ITEM } from '../utils/mutations'

const SingleItem = () => {
  // Use `useParams()` to retrieve value of the route parameter `:itemId`
  const { itemId } = useParams();

  const [ addDibToUser] = useMutation(ADD_DIB_TO_USER)
  const [ addDibToItem] = useMutation(ADD_DIB_TO_ITEM)

  async function handleAddDibs(e) {
    try {
       const userData = await addDibToUser({ 
        variables : {
            itemId: e.target.id,
            userId: Auth.getProfile().data._id
        }
       })
       const itemData  = await addDibToItem({
          variables: {itemId: e.target.id,
          dibbedBy: Auth.getProfile().data._id
       }})
       console.log(userData.data, itemData.data)

    } catch (error) {
        console.log(error)
    }

    console.log(e.target.id)
}



  const { loading, data } = useQuery(QUERY_ITEM, {
    // pass URL parameter
    variables: { _id : itemId },
  });

  const item = data?.item || {};


  if (loading) {
    return <div>Loading...</div>;
  }
  return (<div className='container text-center'>
        <div className='row justify-content-center'>
         <div className="card m-3 p-2 col-10">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                            <div className="small d-flex justify-content-center">
                                <button id={item._id} className="btn btn-primary" onClick={(e) => {handleAddDibs(e)}}>
                                  Add to Dibs 
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

      <div className="my-1">
        <CommentList comments={item.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm itemId={itemId}/>
      </div>

      </div>
  );
};

export default SingleItem;