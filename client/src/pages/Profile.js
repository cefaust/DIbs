import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_USER } from '../utils/queries';
import DibsList from '../components/DibsList'
import PostList from '../components/PostList';
import Auth from '../utils/auth';

export default function Profile() {
const [ProfilePage, setProfilePage] = useState('dibs');
const token = Auth.loggedIn() ? Auth.getProfile() : null;

const { loading, data } = useQuery(QUERY_USER, {
  variables: { _id: token.data._id}
});

const user = data ? data.user : null;

if(user) {
  return (
    <div>
      <div className='gradient-custom vh-100'>
      <h1>Profile</h1>
      {
        ProfilePage === 'dibs' ? 
          <div>
            <button onClick={() => setProfilePage('posts')}>Dibs</button> 
            <DibsList itemIds={user.dibsCalled} />
          </div>
        : 
          <div>
            <button onClick={() => setProfilePage('dibs')}>My Posts</button>
            <PostList itemIds={user.items} />
          </div>
      }
      </div>

      <div>
        {ProfilePage === "Home" ? (<h1>home</h1>) : (<DibsList data={user.items} />)}
      </div>
    </div>

    
  );
} else {
  return(<h1>No user</h1>)
}
  
}
