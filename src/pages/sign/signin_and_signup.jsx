import React from 'react'
import './signin_and_signup.scss';
import SignIn from 'component/signin/signin';
import SignUp from 'component/signup/signup';
export default function signin_and_signup() {
    return (
        <div className="signup-page">
            <SignIn />
            <SignUp />
        </div>
    )
}
