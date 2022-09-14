import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_ITEM } from '../utils/queries';
import { ADD_DIB_TO_ITEM, REMOVE_DIB_FROM_ITEM } from '../utils/mutations'

const SingleItem = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { _id } = useParams();

  const [ addDib, { error }] = useMutation(ADD_DIB_TO_ITEM)

  const { loading, data } = useQuery(QUERY_ITEM, {
    // pass URL parameter
    variables: { id: _id },
  });

  const item = data?.item || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (<div>
        <div>
         <div className="card mb-3">
            <img src={item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                            <div className="small d-flex justify-content-start">
                                <a href="#!" className="d-flex align-items-center me-3" onClick={addDib}>
                                <i className="far fa-thumbs-up me-2"></i>
                                <p className="mb-0">Dibs</p>
                                </a>
                                <a href="#!" className="d-flex align-items-center me-3">
                                 <i className="far fa-comment-dots me-2"></i>
                                 <p className="mb-0">Comment</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

      <div className="my-5">
        <CommentList comments={item.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm itemId ={item._id} />
      </div>

      </div>
  );
};

export default SingleItem;