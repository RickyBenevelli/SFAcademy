import React, { Component } from 'react';

import './component.css';

import axios from 'axios';
const baseUrl = "http://localhost:3000";

class SignIn extends Component {
    state = { 
        email: '',
        password:''
     }
    render() {

        this.handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
        }


        this.handleSubmit = (e) => {
            e.preventDefault();
            this.registration()
            //aggiungere la validazione del form in una successiva versione
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
                if(res.data.status !== undefined){
                    console.log(JSON.stringify(res.data.status));//utente registrato correttamente
                    this.props.history.push(`/sign-in`); // riindirizzamento al sign-in
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