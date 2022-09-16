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
      <div className= 'text-center gradient-custom vh-1000'>
      <h1>Profile</h1>
      {
        ProfilePage === 'dibs' ? 
          <div>
            <button className= 'btn btn-primary m-3'onClick={() => setProfilePage('posts')}>My Dibs</button> 
            <DibsList itemIds={user.dibsCalled} />
          </div>
        : 
          <div>
            <button className = 'btn btn-primary m-3' onClick={() => setProfilePage('dibs')}>My Posts</button>
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
