import React, { Component } from 'react';

import './component.css'

class SignIn extends Component {
    state = {  }
    render() {
        this.validate = data => {
            const errors = {};
            if (!data.password) errors.password="password can't be blank"
            if (data.state.password.length()< 8) errors.password = "password must be at least 8 characters"
            return errors;
        }
        const handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
            console.log(this.state)
        }
        const handleSubmit = () => {
            console.log('sumbit')
            console.log('this is the actual state:', this.state)
            const errors = this.validate(this.state);
            this.setState({errors});
        }

        return ( 
            <div className="firstly-square">
                <div className="center-form">
                    <form action="" className="sign" onSubmit={handleSubmit}>
                        <div className="signin-username">
                            <label htmlFor="username" className="signup-label">username</label>
                            <input type="text" name="username" className="signin-input" onChange={handleChange} value={this.state.username}/>
                        </div>
                        <div className="signin-password">
                            <label htmlFor="password" className="signin-label">password</label>
                            <input type="password" name="password" className="signin-input" onChange={handleChange}/>
                        </div>
                        <div className="signin-bottone">
                            <button type="submit" className="signin-button" >Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SignIn;