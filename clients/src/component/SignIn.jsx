import React, { Component } from 'react';

import './component.css'
import axios from 'axios';
const baseUrl = "http://localhost:3001";

class SignIn extends Component {
    state = { 
        email:'',
        password: '',
     }
    render() {
        // this.validate = data => {
        //     const errors = {};
        //     if (!data.password) errors.password="password can't be blank"
        //     if (data.state.password.length()< 8) errors.password = "password must be at least 8 characters"
        //     return errors;
        // }
        const handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
            console.log(this.state)
        }
        const handleSubmit = (e) => {
            e.preventDefault(); //solo per lo sviluppo
            console.log('sumbit')
            console.log('this is the actual state:', this.state)
            componentDidMount();
            // const errors = this.validate(this.state);
            // this.setState({errors});
            //eventualmente aggiungere la validazione del form
        }

        const componentDidMount = () => {
            let email= this.state.email; // Controllare il funzioinamento di questo
            const url = baseUrl
            axios.get(url, {
                params: {
                    email: email
                }
            })
            .then(res=>{
              if (res.data.success) {
                const data = res.data.data[0]
                this.setState({
                  email: data.email,
                  password: data.password
                })
                console.log(JSON.stringify(data))
              }
              else {
                alert("Users not found")
              }
            })
            .catch(error=>{
              alert("Error server "+ error)
            })
          }

        return ( 
            <div className="firstly-square">
                <div className="center-form">
                    <form action="" className="sign" onSubmit={handleSubmit}>
                        <div className="signin-username">
                            <label htmlFor="email" className="signup-label">email</label>
                            <input type="text" name="email" className="signin-input" onChange={handleChange} value={this.state.email}/>
                        </div>
                        <div className="signin-password">
                            <label htmlFor="password" className="signin-label">password</label>
                            <input type="password" name="password" className="signin-input" onChange={handleChange}/>
                        </div>
                        <div className="signin-bottone">
                            <button type="submit" className="signin-button">Sumbit</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SignIn;