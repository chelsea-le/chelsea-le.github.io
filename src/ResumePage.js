// Landing page -- what users see on arrival
import React from 'react';
import './css/Resume.css'
var ResumePage = React.createClass({
    render() {
        return(
            <div className="resume">
                <img id="resume" src="imgs/resume.png" alt="Oct 2016 resume"/>
            </div>
        )
    }
});

export default ResumePage;
