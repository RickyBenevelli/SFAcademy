import React, { Component } from 'react';
import { connect } from 'react-redux';

import {login, information} from '../actions/searchActions';

import './component.css'
import axios from 'axios';
const baseUrl = "http://localhost:3000";

class SignIn extends Component {
    state = { 
        email:'',
        password: '',
    }
    render() {

        const handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});
        }

        const handleSubmit = (e) => {
            //aggiungere la validazione del form in una futura versione
            e.preventDefault();
            access();
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
              if (res.data.status !== undefined) {
                const data = res.data.status
                console.log(JSON.stringify(data)) //users entrato
                login();
                this.props.history.push('/')
                this.props.information(this.state.email) //ERROR: da risolvere con funzioni async
                
            }
            else {
                alert(res.data.error) // utente non trovato
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

const mapStateToProps = state => ({
    email : state.user.email
  });
  
  export default connect( mapStateToProps, { information })(SignIn);