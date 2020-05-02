import React, { Component } from 'react'
import './signup.scss';
import { auth , createUserProfile } from '../../firebase/firebase';
import FormInput from 'component/form-input/form-input';
import CustomButton from 'component/custom-button/custom_button';
export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert('Password does not match');
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            )
            await createUserProfile(user, { displayName})
        
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        const { displayName, email, password, confirmPassword} = this.state
        return (
            <div className="signup">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />
                    <CustomButton type="submit">Sign up</CustomButton>
                </form>
            </div>
        )
    }
}
