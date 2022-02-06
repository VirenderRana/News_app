import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
        <div className='row row-header'>
        <Button className="ml-1" color="danger" onClick={() => logout()} >Logout</Button>
    </div>
    )
  );
};

export default Logout;