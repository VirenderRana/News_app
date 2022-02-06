import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Main from './MainComponent';
import { Navbar, Util, Nav, Jumbotron, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarText } from 'reactstrap';

const Login = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
      !isAuthenticated ? (
        <body className='fullscreen'>
            

            <div className="cont">
                <div className="screen">
                    <div className="screen__content">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <h1>Daily News App</h1>
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







            <div className='container align-items-center'>
            <h1>Welcome to my News App!</h1>
            <Button className="btn" onClick= {() => loginWithRedirect()}>Login</Button>
            
            </div>
    </body>
  
      )
      : (<div>
          <Main user={user} />
        </div>)
  );
};

export default Login;
