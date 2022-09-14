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
    <div className='card py-5 px-md-5 w-50'>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
        <h3 className='my-2'>Add an item to be dibbed</h3>

        <form
          className="d-flex flex-column"
          onSubmit={handleFormSubmit}
        >
          <div className="form-group">
            <p className='text-left'>Item Name</p>
            <input
              name="itemName"
              placeholder="Name your item"
              value={formState.itemName}
              className="form-control m-2"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <label>Item Description</label>
            <textarea name="itemDesc"
              placeholder="Describe your item"
              value={formState.itemDesc}
              className="form-control m-2"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="">
            <button className="btn btn-primary btn-block my-2" type="submit">
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