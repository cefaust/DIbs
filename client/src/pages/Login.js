import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card-body py-2 px-md-5 vh-100 gradient-custom">
      <div className="row d-flex justify-content-center m-3">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Please Login!</h2>
          <form onSubmit={handleFormSubmit}>
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
              <label className="form-label">Password</label>
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
              Log In
            </button>
          </form>
          <p >Don't have an account? <Link to='/SignUp'>
            Register Here
          </Link></p>
        </div>
      </div>
    </div>

  );
};
