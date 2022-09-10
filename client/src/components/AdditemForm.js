import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_ITEM } from '../../utils/mutations';

const AdditemForm = () => {
  const [formState, setFormState] = useState({
    itemName: '',
    itemDesc: '',
  });

  const [addItem, { error }] = useMutation(CREATE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addItem({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({...formState, [name]: value})
  };

  return (
    <div>
      <h3>Add an item to be dibbed</h3>

      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="itemName"
            placeholder="Name your item"
            value={formState.itemName}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="itemDesc"
            placeholder="Describe your item"
            value={formState.itemDesc}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Item
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default AdditemForm;