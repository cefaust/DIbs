import React, { useState } from 'react';
import { CREATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import {Link} from 'react-router-dom';

export default function SignUp(props) {
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [createUser] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await createUser({
      variables: {
        email: formState.email,
        password: formState.password,
        name: formState.name
      },
    });
    const token = mutationResponse.data.createUser.token;
        Auth.login(token);
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
        <div className="card-body py-3 px-md-5 vh-100 gradient-custom">
          <div className="row d-flex justify-content-center m-3">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-outline mb-2">
                  <label className="form-label" >Name</label>
                  <input
                    placeholder= 'John Doe'
                    type= 'name'
                    name= 'name'
                    id= 'name'
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-2">
                  <label className="form-label">Email address</label>
                  <input
                    placeholder= 'example@example.com'
                    type= 'email'
                    name= 'email'
                    id= 'email'
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" >Password</label>
                  <input
                    placeholder= '*****'
                    type= 'password'
                    name= 'password'
                    id= 'pwd'
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                <p>Need to Login? <Link to='/Login'>
                  Log In
                </Link></p>
              </form>
            </div>
          </div>
        </div>
  );
};
