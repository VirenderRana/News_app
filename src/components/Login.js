import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Main from './MainComponent';
import Logout from './Logout';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
      !isAuthenticated ? (
  <button onClick= {() => loginWithRedirect()}>
      Log in
  </button>
      )
      : <div>
          <Main />
        </div>
  );
};

export default Login;
