import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';
import { Link } from 'react-router-dom'
import SingleDib from './SingleDib'
import Auth from '../utils/auth';

const DibsList = ({ itemIds, userId }) => {
  const token = Auth.loggedIn() ? Auth.getProfile() : null;
  
  if (!itemIds) {
    // return <h3>No Dibs Yet</h3>;
  } else {
    return (
      <div className='container text-center'>
        <h3>Your Dibs</h3>
        <div className='row justify-content-center'>
        {
          itemIds.map((itemId) => (
            <SingleDib itemId={itemId} key={itemId} />
          ))
        }
        </div>
      </div>
    )
  }
}

export default DibsList

