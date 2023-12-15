import React from 'react';
import "./profile.css"

const MyProfile = () => {
  // Replace the following data with actual user data
  const userData = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    bio: 'I love coding and learning new technologies.',
    // Add more user information as needed
  };

  return (
    <div className="my-profile">
      
      <h2>My Profile</h2>
      <div className='pic-sec' >
      <img className='profile-pic' src='./img/king-tekken3.jpg' />
      </div>
      <div className='info-sec'>
      <div>
        <strong>Username: {userData.username}</strong> 
      </div>
      <div>
        <strong>Email: {userData.email}</strong> 
      </div>
      <div>
        <strong>Bio: {userData.bio}</strong> 
      </div>
      </div>
      {/* Add more user information fields as needed */}
    </div>
  );
};

export default MyProfile;
