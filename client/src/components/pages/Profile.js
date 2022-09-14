import { useState } from 'react'
// import AdditemForm from '../AdditemForm';

export default function Profile() {
const [ProfilePage, setProfilePage] = useState('Home')



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
