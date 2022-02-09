import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Main from './MainComponent';

const Login = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
      !isAuthenticated ? (
            <div className="cont">
                <div className="screen">
                    <div className="screen__content">
                    <h1 className="login-frame">Daily News App</h1>
                            <button className="button login__submit" onClick= {() => loginWithRedirect()}>
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>		
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
  
      )
      : (<div>
          <Main user={user} />
        </div>)
  );
};

export default Login;
