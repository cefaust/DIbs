import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_ITEM } from '../utils/mutations';

const AdditemForm = () => {
  const [formState, setFormState] = useState({
    itemName: '',
    itemDesc: '',
  });

  // const [addItem, { error }] = useMutation(CREATE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
              value={formState.itemName}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-outline mb-2">
          <label className='form-label'>Description</label>
            <textarea name="itemDesc"
              placeholder="Describe your item"
              value={formState.itemDesc}
              className="form-control"
              onChange={handleChange}
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
};

export default AdditemForm;