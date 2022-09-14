import React, { useState } from 'react';
import { CREATE_ITEM } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

// import { QUERY_ITEMS } from '../utils/queries';

export default function AddItem() {

  const [formState, setFormState] = useState({
    itemName: '',
    itemDesc: '',
  });

  const [createItem] = useMutation(CREATE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await createItem({
        variables: {
          name: formState.itemName,
          description: formState.itemDesc,
          userId: Auth.getProfile().data._id
        }
      })
      const token = mutationResponse.data.createItem.token;
          Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({...formState, [name]: value})
  };

  return (
    <div className='card-body py-5 px-md-5'>
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8">
      <h3 className='mb-5 fw-bold'>Add An Item For Dibbing</h3>

      <form
        className="d-flex flex-column"
        onSubmit={handleFormSubmit}
      >
        <div className="form-outline mb-2">
          <label className='form-label'>Name</label>
          <input
            name="itemName"
            placeholder="Name your item"
            type='itemName'
            id='itemName'
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-outline mb-2">
        <label className='form-label'>Description</label>
          <textarea
            placeholder="Describe your item"
            type='itemDesc'
            name="itemDesc"
            id='itemDesc'
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>

        <div className="">
          <button className="btn btn-primary btn-block mt-3" type="submit">
            Add Item
          </button>
      </div>
    </form>
      </div>
    </div>
  </div>
  );
}
