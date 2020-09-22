import React from 'react';
import './LogInForm.css';
import fbLogo from '../../FakeData/Icon/fb.png'
import googleLogo from '../../FakeData/Icon/google.png';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLogInFrameWork, resetPassword, signInWithEmailAndPassword } from './loginManager';
import { UserContext } from '../../App';

const LogInForm = () => {
    const [loggedInUser, setLoggedInUser, user, setUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    initializeLogInFrameWork();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state ||{ from: { pathname: "/" } };

    const handleResponse = (response) => {
        setUser(response);
        setLoggedInUser(response);
        response.error? history.replace('/login') : history.replace(from);
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => handleResponse(res))
    }
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => handleResponse(res))
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value);
            if(!isFieldValid){
                alert('Your password have to be 8 character long and must contain one letter and one number');
                e.target.value = '';
            }
        }
        if(isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            (user.password === user.confirmPassword) &&
            createUserWithEmailAndPassword(user.name(), user.email, user.password)
                .then(res => handleResponse(res));
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => handleResponse(res));
        }
        e.target.reset();
        e.preventDefault();
    }
    const handleResetPass = email => {
        if(user.email){
            resetPassword(email);
        }
    }

    return (
        <div className="container">
            <div className="login-form">
            {
                user.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{user.error}</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            {
                user.newUser && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>User {user.newUser? 'created' : 'logged in'} successfully!</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <h4>
                    {(location.hash === '#/reset')? 'Reset Password' : 
                    newUser ? 'Create an account' : 'LogIn'}
                </h4>
                {
                    newUser && <>
                        <div className="form-group">
                            <div className="input-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="firstName" placeholder="First Name" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="lastName" placeholder="Last Name" required="required" />
                            </div>
                        </div>
                    </>
                }
                <div className="form-group">
                  <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                </div>
                {
                    !(location.hash === '#/reset') &&
                    <div className="form-group">
                        <input onBlur={handleBlur} type="password" className="form-control" name="password" placeholder="Password" required="required" />      
                    </div>
                }
                {
                    newUser && <div className="form-group">
                        <input onBlur={handleBlur} type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" required="required" />
                    </div>
                }
                <div className="form-group">
                    {
                        (location.hash === '#/reset')? <input type="submit" className="login-btn form-control" id="submit-btn" value='Reset Password' />
                        : <input type="submit" className="login-btn form-control" id="submit-btn" value={!newUser? 'LogIn' : 'Create an Account'}/>
                    }
                </div>
                {
                    !newUser && !(location.hash === '#/reset') &&
                        <div className="clearfix">
                            <label className="float-left form-check-label text-dark">
                                <input type="checkbox"/> Remember me
                            </label>
                            <Link to='#/reset' onClick={() => handleResetPass(user.email)} className="orange-text float-right" >Forgot Password?</Link>
                        </div>
                }
                <p className="mt-3 mb-1">{newUser ? 'Already have an account?' : "Don't have an account?"} <Link to={!newUser? 'login/create-account' : '/login'} className="orange-text" onClick={() => setNewUser(!newUser)}>{newUser ? 'LogIn' : 'Create an account'}</Link></p>
            </form>
            <div className="Separator"><i>or</i></div>
            <div onClick={fbSignIn} className="social-login d-flex justify-content-around align-items-center">
                <img className='d-inline logo' src={fbLogo} alt=""/>
                <span>Continue With Facebook</span>
            </div> 
            <div onClick={googleSignIn} className="social-login d-flex justify-content-around align-items-center mt-3">
                <img className='d-inline logo' src={googleLogo} alt=""/>
                <span>Continue With Google</span>
            </div> 
        </div>
    </div>
    );
};
export default LogInForm;