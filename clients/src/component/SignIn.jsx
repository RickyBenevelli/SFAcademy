import React, { Component } from 'react';

import {login} from '../actions/searchActions';

import './component.css'
import axios from 'axios';
const baseUrl = "http://localhost:3000";

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
            // console.log(this.state)
        }
        const handleSubmit = (e) => {
            e.preventDefault(); //solo per lo sviluppo
            // console.log('sumbit')
            // console.log('this is the actual state:', this.state)
            access();
            // const errors = this.validate(this.state);
            // this.setState({errors});
            //eventualmente aggiungere la validazione del form
        }

        const access = () => {
            const url = baseUrl + '/router/sign-in';
            axios.get(url, {
                params: {
                    email: this.state.email,
                    password: this.state.password
                }
            })
            .then(res=>{
              // eslint-disable-next-line eqeqeq
              if (res.data.status != undefined) {
                const data = res.data.status
                console.log(JSON.stringify(data))
                // console.log(JSON.stringify(res))
                login();
                this.props.history.push('/')
              }
              else {
                alert(res.data.error)
                // console.log('Isers non found')
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
                        <div className="title-sign">
                            SignIn
                        </div>
                        <div className="signin-username">
                            <label htmlFor="email" className="signin-label">email</label>
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