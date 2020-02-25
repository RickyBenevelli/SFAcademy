import React, { Component } from 'react';

import './component.css'

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="firstly-square">
                <div className="center-form">
                    <form action="" className="sign" onSubmit={this.handleSubmit}>
                        <div className="signup-username">
                            <label htmlFor="username" className="signup-label">username</label>
                            <input type="text" name="username" className="signup-input" onChange={this.handleChange}/>
                        </div>
                        <div className="signup-email">
                            <label htmlFor="email" className="signup-label">email</label>
                            <input type="email" name="email" className="signup-input" onChange={this.handleChange}/>
                        </div>
                        <div className="signup-password">
                            <label htmlFor="password" className="signup-label">password</label>
                            <input type="password" name="password" className="signup-input" onChange={this.handleChange}/>
                        </div>
                        <div className="signup-bottone">
                            <button type="submit" className="signup-button">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SignIn;