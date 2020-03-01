import React, { Component } from 'react';
import './component.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenitore-footer">
                <footer className="page-footer font-small blue fixed-bottom Footer">
                    <div className="footer-copyright text-center py-3">© 2020 Copyright
                        <a href="https://www.instagram.com/rickybenevelli/?hl=it"> by Riccardo Benevelli</a>
                    </div>
                </footer>
            </div> 
        );
    }
}

export default Footer;