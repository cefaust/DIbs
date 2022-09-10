import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../../utils/queries';

export default function Profile() {
const [ProfilePage, setProfilePage] = useState('Home');
const { loading, data } = useQuery(QUERY_USER);
const userData = data?.me || {};




  return (
    <div>
      <div >
      <h1>Profile</h1>
      {ProfilePage === 'Home' ? <button onClick={() => setProfilePage('Dibs')}>Dibs</button> 
      : <button onClick={() => setProfilePage('Home')}>My Posts</button>}
      </div>
    </div>
  );
}
