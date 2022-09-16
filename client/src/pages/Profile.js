import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../utils/queries';
import DibsList from '../components/DibsList'
import Auth from '../utils/auth';

export default function Profile() {
const [ProfilePage, setProfilePage] = useState('Home');
const token = Auth.loggedIn() ? Auth.getProfile() : null;

const { loading, data } = useQuery(QUERY_USER, {
  variables: { _id: token.data._id}
});
    const items = data?.user || [];




  return (
    <div>
      <div className="m-5 vh-100">
      <h1>Welcome {token.data.name}</h1>
      {ProfilePage === 'Home' ? <div><button onClick={() => setProfilePage('Dibs')}>Dibs</button> 
      </div>
      : <button onClick={() => setProfilePage('Home')}>My Posts</button>}
      </div>


      <div>
        {ProfilePage === "Home" ? (<h1>home</h1>) : (<DibsList data={items} />)}
      </div>
    </div>

    
  );
}
