import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../utils/queries';
// import DibsList from '../components/DibsList'
import Auth from '../utils/auth';

export default function Profile() {
const [ProfilePage, setProfilePage] = useState('Home');
const token = Auth.loggedIn() ? Auth.getProfile() : null;

// const [getUser, { error }] = useQuery(QUERY_USER);

console.log(token.data._id)




  return (
    <div>
      <div >
      <h1>Profile</h1>
      {ProfilePage === 'Home' ? <div><button onClick={() => setProfilePage('Dibs')}>Dibs</button> 

      {/* <DibsList /> */}
      </div>
      : <button onClick={() => setProfilePage('Home')}>My Posts</button>}
      </div>
    </div>
  );
}
