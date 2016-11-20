// resume page -- displays img of resume

//importing documents in to be used in this page
import React from 'react';
import './css/Resume.css'

//component that renders resume png
var ResumePage = React.createClass({
    render() {
        return(
            <div className="resume">
                <img id="resume" src="imgs/resume.png" alt="Oct 2016 resume"/>
            </div>
        )
    }
});

//exports resume page to be used in other files
export default ResumePage;
