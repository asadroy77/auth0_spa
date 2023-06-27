import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {

    let {user,error,isLoading,isAuthenticated} = useAuth0()
  return (
    <div>
      <h1>Profile</h1>
        {user?.name}
    </div>
  )
}

export default Profile