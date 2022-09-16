import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'

import { ADD_COMMENT_TO_ITEM } from '../utils/mutations';

const CommentForm = (props) => {
  const [formState, setFormState] = useState({ content: ''});
  const [addCommentToItem] = useMutation(ADD_COMMENT_TO_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addCommentToItem({
        variables: { 
          itemId: props.itemId, 
          content: formState.content, 
          commenterId: Auth.getProfile().data._id

      }});
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  

  return (
    <div>
      <h4>Comment to claim dibs:</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="content"
            placeholder="Add your comment..."
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
