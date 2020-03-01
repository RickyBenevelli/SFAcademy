import React, {Component} from 'react';
import axios from 'axios';

import './component.css';

class Scores extends Component {
    state = { 
        dati: []
     }

    componentDidMount() {
        var url = 'http://localhost:3000/router/scores';
        axios.get(url)
          .then(res => {
            const dati = res.data.data;
            this.setState({ dati });
            console.log(this.state);
          })
          .catch(err => alert(err))
      }


    render() { 
        return ( 
        <table className="table table-success">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Votation</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
                {this.state.dati? this.state.dati.map(e => 
                <tr key={JSON.stringify(e[0])}>
                    <th scope="row">{this.state.dati.indexOf(e)+1}</th>
                    <td>{JSON.stringify(e[1])}</td>
                    <td>{e[3]}</td>
                    <td>{Math.round(e[2]/e[3]*100)/100}</td>
                </tr>
                ) : console.log(this.state.dati)}
        </tbody>
        </table> 
        );
    }
}
 
export default Scores;




    
        
        
            
               
                
   

 




