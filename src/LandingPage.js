// Landing page -- what users see on arrival
import React from 'react';
import './css/Landing.css'
import '../node_modules/font-awesome/css/font-awesome.css'

var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
                <h3>"It's not about what you have, but who you are and what you do."</h3>
                <h1>
                {/* &#160; adds space between words */}
                    CHELSEA &#160;LE
                </h1>
                <h2>University of Washington - Informatics Student - Woman in Tech - Technophile</h2>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/chelseale" target="_blank" id="linkedin"> <i className="fa fa-linkedin-square"></i></a>
                  <a href="https://www.instagram.com/chelsea.le510" target="_blank" id="instagram"> <i className="fa fa-instagram"></i></a>
                  <a href="https://www.facebook.com/chelsea.le.15" target="_blank" id="facebook"> <i className="fa fa-facebook-square"></i></a>
                </div>
            </div>
        )
    }
});

export default LandingPage;
