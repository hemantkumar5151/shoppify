import React, { Component } from 'react'
import './signin.scss';

import FormInput from 'component/form-input/form-input';
import CustomButton from 'component/custom-button/custom_button';
import  {signInWithGoogle}  from '../../firebase/firebase';
import  {auth } from '../../firebase/firebase';
export default class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleValue = this.handleValue.bind(this);
    }
    
    handleValue( event) {
        event.preventDefault();
        const {name , value } = event.target;
        this.setState({ [name] : value })
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email , password} = this.state;
        try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: ''})
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput type="email" 
                        placeholder="example@gmail.com"
                        name="email"
                        handleChange={ this.handleValue}
                        label="email"
                        value={this.state.email}
                        required />
                    <FormInput type="password"
                            placeholder="*******"
                            name="password"
                            label="password"
                            handleChange={this.handleValue}
                            value= {this.state.password}
                            required />
                    <div className="buttons">
                        <CustomButton type="submit"  value="Submit Form" >Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle}  isGoogleSignIn>{' '}Sign in with google {' '}</CustomButton>
                    </div>
                    </form>
            </div>
        )
    }
}
