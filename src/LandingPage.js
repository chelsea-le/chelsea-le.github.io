// Landing page -- what users see on arrival

//importing documents in to be used in this page
import React from 'react';
import './css/Landing.css'
import '../node_modules/font-awesome/css/font-awesome.css'

//main component for LandingPage and rendering the pieces of it
var LandingPage = React.createClass({
    render() {
        return(
            <div className="landing">
                <h3>"It's not about what you have, but who you are and what you do."</h3>
                <div className="portrait">
                  <img id="portrait" src="imgs/chelsea.jpg" alt="Chelsea Le"/>
                </div>
                <h1>
                {/* &#160; adds space between words */}
                    CHELSEA &#160;LE
                </h1>
                <h2>University of Washington - Informatics Student - Woman in Tech - Technophile</h2>
                <div className="icons">
                  <a href="https://www.linkedin.com/in/chelseale" target="_blank" id="linkedin"><i className="fa fa-linkedin-square"></i></a>
                  <a href="https://www.instagram.com/chelsea.le510" target="_blank" id="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="https://www.facebook.com/chelsea.le.15" target="_blank" id="facebook"><i className="fa fa-facebook-square"></i></a>
                </div>
            </div>
        )
    }
});

export default LandingPage;
