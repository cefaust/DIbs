import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import Auth from '../utils/auth'

import { QUERY_ITEM } from '../utils/queries';
import { REMOVE_COMMENT_FROM_ITEM } from '../utils/mutations';


const CommentList = ({ itemId, commentId, comments = []}) => {
  const [removeComment] = useMutation(REMOVE_COMMENT_FROM_ITEM, {
    variables: { 
      commentId: commentId, 
      itemId: itemId},
    refetchQueries: [{query: QUERY_ITEM, 
      variables: { _id: itemId
      }    }]
  })

  console.log(comments);
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                   Someone commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.date_created}
                  </span>
                </h5>
                <p className="card-body">{comment.content}</p>
                <button className='btn btn-danger m-s' onClick={removeComment}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;