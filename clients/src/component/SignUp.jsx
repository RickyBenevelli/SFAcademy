import React, { Component } from 'react';

import './component.css';

import axios from 'axios';
const baseUrl = "http://localhost:3000";

class SignIn extends Component {
    state = { 
        // username: '',
        email: '',
        password:''
     }
    render() {

        this.handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
            // console.log(this.state)
        }
        this.handleSubmit = (e) => {
            e.preventDefault();
            // console.log('sumbit')
            // console.log('this is the actual state:', this.state);
            this.registration()
            //eventualmente aggiungere la validazione del form
        }
        this.registration = () => {
            
            const url = baseUrl + '/router/sign-up';
            axios.post(url, {
                params:{
                    email: this.state.email,
                    password: this.state.password
                }
            })
            .then(res => {
                if(res.data.status !== undefined){ //controllare che vada bene l'operatore logico
                    console.log(JSON.stringify(res.data.status));
                    this.props.history.push(`/sign-in`)
                }
                else{
                    console.log(res.data.error);
                }
            })
            .catch(error=>{
                alert("Error server "+ error);
              })
        }

        return ( 
            <div className="firstly-square">
                <div className="center-form">
                    <form action="" className="sign" onSubmit={this.handleSubmit}>
                    <div className="title-sign">
                            SignUp
                        </div>
                    {/* <div className="signup-username">
                            <label htmlFor="username" className="signup-label">username</label>
                            <input type="text" name="username" className="signup-input" onChange={this.handleChange}/>
                        </div> */}
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