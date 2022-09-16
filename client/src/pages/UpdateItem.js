import React, { useState } from 'react';
import { UPDATE_ITEM, ADD_ITEM_TO_USER} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateItemForm() {
    const navigate = useNavigate();
    const { itemId } = useParams();

  const [formState, setFormState] = useState({
    itemName: '',
    itemDesc: '',
  });

  const [updateItem] = useMutation(UPDATE_ITEM);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const MutationResponse = await updateItem({
        variables: {
            _id: itemId,
            name: formState.itemName,
            description: formState.itemDesc,
            userId: Auth.getProfile().data._id
        }

      });
        const token = MutationResponse.data.createItem.token;
        Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    navigate('/Profile')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({...formState, [name]: value})
  };

  return (
    <div className='card-body py-5 px-md-5'>
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8">
      <h3 className='mb-5 fw-bold'>Update Item For Dibbing</h3>

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
                Update Item
          </button>
      </div>
    </form>
      </div>
    </div>
  </div>
  );
}

